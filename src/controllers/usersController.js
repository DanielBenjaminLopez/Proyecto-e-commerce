const users = require("../db/dataBase");
const bcrypt = require("bcryptjs");

const createUserController = async (name, username, email, password, role) => {
  const id = users.length + 1;
  const hashPassword = await bcrypt.hash(password, 10); //hashear toma su tiempo
  const newUser = { id, name, username, email, password: hashPassword, role };
  users.push(newUser);
  return newUser;
};

const getAllUsersController = () => {
  return users;
};

const userByNameController = (name) => {
  const usersByName = users.filter((i) => i.name === name);
  return usersByName;
};

const getOneUserByIdController = (id) => {
  const userById = users.find((i) => i.id === Number(id));
  return userById;
};

const updateUserController = (id, name, username, email) => {
  const updateUser = { name, username, email };
  const userUpdateById = users.find((i) => i.id === Number(id));
  if (userUpdateById) {
    //El primer parametro es el obj a actualizar y el segundo la actualización a realizar
    Object.assign(userUpdateById, updateUser);
  } else {
  }
  console.log(userUpdateById);
};

const deleteUserController = (id) => {
  const index = users.findIndex((i) => i.id === Number(id));
  let deleteUser = null;

  if (index !== -1) {
    [deleteUser] = users.splice(index, 1);
  }
  console.log(deleteUser);
};

module.exports = {
  createUserController,
  getAllUsersController,
  userByNameController,
  getOneUserByIdController,
  deleteUserController,
  updateUserController,
};
