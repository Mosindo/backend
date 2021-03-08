const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/garage',{useNewUrlParser: true, useUnifiedTopology: true },()=>{
    console.log("db connected");
});

// structure de la donnée
const carsSchema = new mongoose.Schema({
    brand: String,
    model: String,
    year: Number
});

const carsModel = new mongoose.model("cars", carsSchema);

// c => creation :model.create();
// carsModel.deleteMany({}).
// then(()=>{
//     carsModel.create({
//         brand:" Renault",
//         model: "Espace",
//         year: 1999
//     },
//     {
//         brand:" Renault",
//         model: "Scenic",
//         year: 2004  
//     },
//     {
//         brand:" Renault",
//         model: "308",
//         year: 2017   
//     });
// })

// carsModel.find({
//     _id:"60463eeccf2d033ddc9c6d7d"
// }).
// then((response)=>
//     console.log(response)
// )

// La mise à jours =>mode.update()

// carsModel.update(
//     {
//         year:1999
//     },
//     {
//         year:2000
//     }
// ).
// then((response)=>
//     console.log(response)
// )

// delete => model.delet()
// carsModel.deleteMany({
//     brand:/Renault/
// }).
// then((response)=>
//     console.log(response)
// )

//insert=> model.insertMany()

// carsModel.insertMany([
//     {brand: "Aston Martin",model: "DB9",year: 2010},
//     {brand: "Range Rover",model: "Discovery Sport",year: 2017},
//     { brand:" Peugeot",model: "308",year: 2017 }
// ]).
// then((response)=>
//     console.log(response)
// )

carsModel.find({
    year:{$gt:2015}, brand:/P/
}).
then((response)=>
    console.log(response)
)