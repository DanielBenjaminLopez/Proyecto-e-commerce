const express = require("express");
const morgan = require("morgan");
const mainRouter = require("./Routes/main");

const app = express();

//Para usar un body, se pasa de JSON a un objeto de JS
app.use(express.json());

app.use(morgan("dev"));

app.use("/api", mainRouter);

module.exports = app;
