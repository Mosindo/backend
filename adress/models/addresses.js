const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    streetName: String,
    streetNumber: Number,
    postalCode: Number,
    city: String
});

const addressModel = mongoose.model("addresses", addressSchema);

module.exports = addressModel;