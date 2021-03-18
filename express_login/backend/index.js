const express = require("express");
const mongoose = require("mongoose");
const cors = require ("cors");
const userModel = require("./models/user");
const bodyParser = require("body-parser");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
const port = 8000;

app.use(cors());

app.listen(port, () => {
  console.log("ready to code");
});

app.use(bodyParser.json());

mongoose.connect(
  "mongodb://localhost:27017/login",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("DB connectée");
  }
);

app.post("/signup", async (req, res) => {
  console.log(req.body);
  try {
    const user = await userModel.findOne({
      email: req.body.email,
    });
    if (user) {
      res.status(500).send(`email ${req.body.email} already exist`);
      return;
    }
    if (req.body.password.lenght < 8) {
      res.status(400).send("password too short ");
      return;
    }
    if (req.body.confirmPassword !== req.body.password) {
      res.status(400).send(" wrong password confirmed");
      return;
    }
    await userModel.create({
      email: req.body.email,
      password: bcryptjs.hashSync(req.body.password),
      firstName: req.body.firstName,
      surname: req.body.surname,
      dateOfBirth: req.body.dateOfBirth,
    });
    res.send("User create");
  } catch (err) {
    console.log(err);
    res.status(500).send("seems that there is an error"); //revoir les erreur http
  }
});

app.post("/login", async (req, res) => {
  const user = await userModel
    .findOne({
      email: req.body.email,
    })
    .exec();
  if (bcryptjs.compareSync(req.body.password, user.password)) {
    const token = jwt.sign(
      {
        id: user._id,
      },"monToken",{
        expirsIn:'1h'
      });
  } else {
    res.status(401).send("wrong password");
  }
});

app.get("/admin", async (req, res) => {
  try {
    const test = await userModel.find().lean().exec();
    res.json(test);
  } catch (err) {
    console.log(`ADMIN ROUTE ${err} NOT WORKIN`);
  }
});
