const {
  createUserController,
  getAllUsersController,
  userByNameController,
  getOneUserByIdController,
  updateUserController,
  deleteUserController,
} = require("../controllers/usersController");

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
    res.status(418).send({ Error: error.message });
  }
};

const getOneHandler = (req, res) => {
  try {
    const { id } = req.params;
    const response = getOneUserByIdController(id);
    res.send(response);
  } catch (error) {
    res.status(418).send({ Error: error.message });
  }
};

const createUserHandler = (req, res) => {
  try {
    const { name, username, email } = req.body;
    //Aca pedimos al controlador que cree al usuario
    const response = createUserController(name, username, email);
    res.send(response);
  } catch (error) {
    res.status(418).send({ Error: error.message });
  }
};

const updateUserHandler = (req, res) => {
  try {
    const { id } = req.params;
    const { name, username, email } = req.body;
    const response = updateUserController(id, name, username, email);
    res.send(response);
  } catch (error) {
    res.status(418).send({ Error: error.message });
  }
};

const deleteUserHandler = (req, res) => {
  try {
    const { id } = req.params;
    const response = deleteUserController(id);
    res.send(response);
  } catch (error) {
    res.status(418).send({ Error: error.message });
  }
};

module.exports = {
  getAllUsersHandler,
  createUserHandler,
  getOneHandler,
  updateUserHandler,
  deleteUserHandler,
};
