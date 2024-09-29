const getAllProductsHandler = (req, res) => {
  res.send("Estos son los productos");
};

const getOneProductHandler = (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.send("Detalle de producto");
};

const createProductHandler = (req, res) => {
  const { id, name, description, price } = req.body;
  console.log(id, name, description, price);
  res.send("Creando un producto");
};

const updateProductHandler = (req, res) => {
  res.send("Modificación de producto");
};

const deleteProductHandler = (req, res) => {
  res.send("Eliminación de producto");
};

module.exports = {
  getAllProductsHandler,
  createProductHandler,
  getOneProductHandler,
  updateProductHandler,
  deleteProductHandler,
};
