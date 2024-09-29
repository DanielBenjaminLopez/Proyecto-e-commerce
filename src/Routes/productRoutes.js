const { Router } = require("express");
const {
  getAllProductsHandler,
  getOneProductHandler,
  createProductHandler,
  updateProductHandler,
  deleteProductHandler,
} = require("../handlers/productHandler");
const productRouter = Router();

// RUTAS
productRouter.get("/", getAllProductsHandler);
productRouter.get("/:id", getOneProductHandler);
productRouter.post("/", createProductHandler);
productRouter.put("/:id", updateProductHandler);
productRouter.delete("/:id", deleteProductHandler);

module.exports = productRouter;
