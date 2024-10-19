const Joi = require("joi");
const {
  registerController,
  loginController,
} = require("../controllers/authController");
const userSchema = Joi.object({
  name: Joi.string().min(3).required(),
  username: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .pattern(/^\d{6}$/) //Solicita seis digitos
    .required(),
  role: Joi.string().valid("admin", "user"),
});

const registerHandler = async (req, res) => {
  try {
    const { error } = userSchema.validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const { name, username, email, password, role } = req.body;
    //Aca pedimos al controlador que cree al usuario
    const response = await registerController(
      name,
      username,
      email,
      password,
      role
    );
    res.status(201).send(response);
  } catch (error) {
    res.status(500).send({ Error: error.message });
  }
};

const loginHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await loginController(email, password);
    res.status(200).send(response);
  } catch (error) {
    // Manejar errores específicos
    if (error.message === "El usuario no esta registrado") {
      return res.status(404).send({ Error: error.message });
    } else if (error.message === "La contraseña no es correcta") {
      return res.status(401).send({ Error: error.message });
    }

    // Manejar errores inesperados
    res.status(500).send({ Error: "Internal server error." });
  }
};

module.exports = {
  loginHandler,
  registerHandler,
};
