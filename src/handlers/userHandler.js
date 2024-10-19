const { registerController } = require("../controllers/authController");
const {
  createUserController,
  getAllUsersController,
  userByNameController,
  getOneUserByIdController,
  updateUserController,
  deleteUserController,
} = require("../controllers/usersController");
const Joi = require("joi");
const userSchema = Joi.object({
  name: Joi.string().min(3).required(),
  username: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .pattern(/^\d{6}$/) //Solicita seis digitos
    .required(),
  role: Joi.string().valid("admin", "user").required(),
});

const getAllUsersHandler = (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      const response = userByNameController(name);
      res.send(response);
    } else {
      const response = getAllUsersController();
      res.send(response);
    }
  } catch (error) {
    res.status(500).send({ Error: error.message });
  }
};

const getOneHandler = (req, res) => {
  try {
    const { id } = req.params;
    const response = getOneUserByIdController(id);
    res.send(response);
  } catch (error) {
    res.status(500).send({ Error: error.message });
  }
};

const createUserHandler = async (req, res) => {
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

const updateUserHandler = (req, res) => {
  try {
    const { id } = req.params;
    const { name, username, email } = req.body;
    const response = updateUserController(id, name, username, email);
    res.send(response);
  } catch (error) {
    res.status(500).send({ Error: error.message });
  }
};

const deleteUserHandler = (req, res) => {
  try {
    const { id } = req.params;
    const response = deleteUserController(id);
    res.send(response);
  } catch (error) {
    res.status(500).send({ Error: error.message });
  }
};

module.exports = {
  getAllUsersHandler,
  createUserHandler,
  getOneHandler,
  updateUserHandler,
  deleteUserHandler,
};
