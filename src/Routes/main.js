const { Router } = require("express");
const usersRouter = require("./userRoutes");
const productRouter = require("./productRoutes");
const authRoutes = require("./authRoutes");
const mainRouter = Router();

//RUTAS

//Auth
mainRouter.use("/auth", authRoutes);

//Ruta de usuarios
mainRouter.use("/users", usersRouter);

//Ruta de productos
mainRouter.use("/products", productRouter);

module.exports = mainRouter;
