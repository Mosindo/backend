const mongoose = require("mongoose");
const express = require("express");
const studentModel = require("./models/students");
const addressModel = require("./models/addresses");

mongoose.connect(
  "mongodb://localhost:27017/populate",
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("DB Connectée");
  }
);

const port = 8000;
const app = express();

app.listen(port, () => {
  console.log("Serveur lancé");
});

app.get("/students", async (req, res) => {
  const students = await studentModel.find().populate("address").lean().exec();
  res.json(students);
});

app.post("/students", async (req, res) => {
    // req.body.name
    // req.body.surname
    await studentModel.create({ firstName: req.body.name, surname: req.body.surname});
    res.send("Il a été ajouté");
})

const searchAddressId = async () => {
  const address = await addressModel
    .findOne({
      streetName: "rue de la reunion",
      streetNumber: 15,
    })
    .lean()
    .exec();
  return address._id;
};

const addAddress = async () => {
  const addressId = searchAddressId();
  const studentId = searchJohnDoe();
  const student = await studentModel
    .findOne({
      _id: studentId,
    })
    .exec();
  student.address = addressId;
  studentModel
    .updateOne(
      {
        _id: studentId,
      },
      student
    )
    .exec();
};

const searchJohnDoe = async () => {
  const johnDoe = await studentModel
    .findOne({
      firstName: "John",
      surname: "Doe",
    })
    .lean()
    .exec();

  return johnDoe._id;
};

searchJohnDoe();
