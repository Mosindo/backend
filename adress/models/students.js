const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    firstName: String,
    surname: String,
    address: {type: mongoose.Types.ObjectId, ref: "addresses"}
});

const studentModel = mongoose.model("students", studentSchema);

module.exports = studentModel;