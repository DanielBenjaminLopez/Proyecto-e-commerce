const {
  getAllProductsController,
  createProductController,
  getOneProductController,
  updateProductController,
  deleteProductController,
} = require("../controllers/productController");

const getAllProductsHandler = (req, res) => {
  try {
    const response = getAllProductsController();
    res.send(response);
  } catch (error) {
    res.status(418).send({ Error: error.message });
  }
};

const getOneProductHandler = (req, res) => {
  try {
    const { id } = req.params;
    const response = getOneProductController(id);
    res.send(response);
  } catch (error) {
    res.status(418).send({ Error: error.message });
  }
};

const createProductHandler = (req, res) => {
  try {
    const { name, description, price } = req.body;
    const response = createProductController(name, description, price);
    res.send(response);
  } catch (error) {
    res.status(418).send({ Error: error.message });
  }
};

const updateProductHandler = (req, res) => {
  try {
    const { name, description, price } = req.body;
    const response = updateProductController(name, description, price);
    res.send(response);
  } catch (error) {
    res.status(418).send({ Error: error.message });
  }
};

const deleteProductHandler = (req, res) => {
  try {
    const { id } = req.params;
    const response = deleteProductController(id);
    res.send(response);
  } catch (error) {
    res.status(418).send({ Error: error.message });
  }
};

module.exports = {
  getAllProductsHandler,
  createProductHandler,
  getOneProductHandler,
  updateProductHandler,
  deleteProductHandler,
};
