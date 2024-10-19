const { Router } = require("express");
const {
  getAllUsersHandler,
  getOneHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler,
} = require("../handlers/userHandler");
const verifyToken = require("../middleware/verifyMiddleware");
const authorizeAdmin = require("../middleware/authotizationMiddleware");
const usersRouter = Router();

//RUTAS-----
usersRouter.get("/", getAllUsersHandler);
usersRouter.get("/:id", getOneHandler);
usersRouter.post("/", createUserHandler);
usersRouter.put("/:id", verifyToken, authorizeAdmin, updateUserHandler);
usersRouter.delete("/:id", deleteUserHandler);

module.exports = usersRouter;
