const {
  createUserController,
  getAllUsersController,
  userByNameController,
  getOneUserByIdController,
  updateUserController,
  deleteUserController,
} = require("../controllers/usersController");

const getAllUsersHandler = (req, res) => {
  const { name } = req.query;
  if (name) {
    const response = userByNameController(name);
    res.send(response);
  } else {
    const response = getAllUsersController();
    res.send(response);
  }
};

const getOneHandler = (req, res) => {
  const { id } = req.params;
  const response = getOneUserByIdController(id);
  res.send(response);
};

const createUserHandler = (req, res) => {
  const { name, username, email } = req.body;

  //Aca pedimos al controlador que cree al usuario
  const response = createUserController(name, username, email);
  res.send(response);
};

const updateUserHandler = (req, res) => {
  const { id } = req.params;
  const { name, username, email } = req.body;
  const response = updateUserController(id, name, username, email);
  res.send(response);
};

const deleteUserHandler = (req, res) => {
  const { id } = req.params;
  const response = deleteUserController(id);
  res.send(response);
};
module.exports = {
  getAllUsersHandler,
  createUserHandler,
  getOneHandler,
  updateUserHandler,
  deleteUserHandler,
};
