const { Router } = require("express");
const usersRouter = require("./userRoutes");
const mainRouter = Router();

//RUTAS
//Ruta de usuarios
mainRouter.use("/users", usersRouter);

module.exports = mainRouter;
