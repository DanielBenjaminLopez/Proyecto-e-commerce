//
const users = require("../db/dataBase");
const bcrypt = require("bcryptjs");

//permite generar un token para comunicar dos partes
const jwt = require("jsonwebtoken");
const registerController = async (
  name,
  username,
  email,
  password,
  role = "user"
) => {
  const userExists = users.some((user) => user.email === email);
  if (userExists) {
    throw new Error("usuario registrado");
  }
  const id = users.length + 1;
  const hashPassword = await bcrypt.hash(password, 10); //hashear toma su tiempo
  const newUser = { id, name, username, email, password: hashPassword, role };
  users.push(newUser);
  return newUser;
};

const loginController = async (email, password) => {
  const user = users.find((user) => user.email === email);
  if (!user) {
    throw new Error("El usuario no esta registrado");
  }
  const isPassordMatch = await bcrypt.compare(password, user.password);
  if (!isPassordMatch) {
    throw new Error("La contraseña no es correcta");
  }

  const token = jwt.sign({ id: user.id, role: user.role }, "my_secret_key", {
    expiresIn: "1h",
  });
  const { password: _, ...userWhioutPasswor } = user;
  return {
    message: "Inicio de sesión exitoso",
    token,
    user: userWhioutPasswor,
  };
};
module.exports = {
  registerController,
  loginController,
};
