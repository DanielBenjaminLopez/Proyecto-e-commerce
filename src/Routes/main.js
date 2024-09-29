const { Router } = require("express");
const usersRouter = require("./userRoutes");
const productRouter = require("./productRoutes");
const mainRouter = Router();

//RUTAS
//Ruta de usuarios
mainRouter.use("/users", usersRouter);

//Ruta de productos
mainRouter.use("/products", productRouter);

module.exports = mainRouter;
