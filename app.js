// const bodyParser = require("body-parser");
const express = require("express");
require("dotenv").config();
// const {Users, Posts} = require("./db/mongoConnection");
const indexRouter = require("./routes/index");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(indexRouter);

module.exports = app;
