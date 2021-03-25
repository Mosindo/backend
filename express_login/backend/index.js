const express = require("express");
const mongoose = require("mongoose");
const cors = require ("cors");
const userModel = require("./models/user");
const bodyParser = require("body-parser");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userRoute = require("./controllers/user");
const app = express();
const config = require("./config");
const { mongoDB } = require("./config");
const dotenv = require("dotenv").config();

app.use(cors());

app.listen(config.port, () => {
  console.log("ready to code");
});

app.use(bodyParser.json());
app.use(userRoute);

mongoose.connect(
 config.mongoDB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("DB connectée");
  }
);

