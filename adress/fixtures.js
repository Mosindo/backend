const mongoose = require("mongoose");
const studentModel = require("./models/students");
const addressModel = require("./models/addresses");

mongoose.connect("mongodb://localhost:27017/populate", () => {
  console.log("DB Connectée");
});

async function createStudents() {
  try {
    
  } catch (error) {
      console.log(error);
  }
}

const createAddresses = async () => {
    await addressModel.deleteMany({}).exec();
    const result = await addressModel.create([
        {
          streetName: "rue de la reunion",
          streetNumber: 15,
          postalCode: 75020,
          city: "Paris",
        },
        {
          streetName: "rue des chevaux rouges",
          streetNumber: 42,
          postalCode: 01023,
          city: "La bas",
        },
      ]);
      console.log(result);
      const rueDeLaReunionAddress = result[0]._id;
      const laBasAddress = result[1]._id;
      
      await studentModel.deleteMany({}).exec();
      await studentModel.create([
        {
          firstName: "John",
          surname: "Doe",
          address: rueDeLaReunionAddress
        },
        {
          firstName: "Jane",
          surname: "Dane",
          address: laBasAddress
        },
      ]);
}

createStudents();
createAddresses();
