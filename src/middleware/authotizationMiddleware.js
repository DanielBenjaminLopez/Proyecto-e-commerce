const authorizeAdmin = (req, res, next) => {
  const user = req.user;
  if (!user || user.role !== "admin") {
    return res.send("Acceso denegado");
  }

  next();
};
module.exports = authorizeAdmin;
