const getAllUsersHandler = (req, res) => {
  res.send("Estos son los usuarios");
};

const getOneHandler = (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.send("Detalle de usuario");
};

const createUserHandler = (req, res) => {
  const { id, name, username, email } = req.body;
  console.log(id, name, username, email);
  res.send("Creando un usuario");
};

const updateUserHandler = (req, res) => {
  res.send("Modificación usuario");
};

const deleteUserHandler = (req, res) => {
  res.send("Elminación de usuario");
};
module.exports = {
  getAllUsersHandler,
  createUserHandler,
  getOneHandler,
  updateUserHandler,
  deleteUserHandler,
};
