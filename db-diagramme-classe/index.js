const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mongoosePopulate",
{useNewUrlParser: true, useUnifiedTopology: true },
()=>{console.log("db connected");});

//mise en place donnée students
const students=[
    {
        firstName: "Saint",
        surName: "Clément",
        adress:[]
    },
    {
        firstName: "Allowa",
        surName: "Yoko",
        adress:[]
    },
    {
        firstName: "Escobar",
        surName: "Pablo",
        adress:[]
    }
]

const studentSchema = new mongoose.Schema({
    firstName: String,
    surName: String,
    adress: 
        {type:mongoose.Types.ObjectId,ref:"adresses"}
});

const studentModel= mongoose.model("students",studentSchema);

// mise en place adresse
const studentAdress=[
    {
        streetName: "Avenue De la paix",
        streetNumber: 122,
        postCode:92600,
        city:"Asnières-sur-seine"
    },
    {
        streetName: "rue du pignon",
        streetNumber: 12,
        postCode:92600,
        city:"Asnières-sur-seine"
    },
    {
        streetName: "place de la croix",
        streetNumber: 22,
        postCode:92600,
        city:"Asnières-sur-seine"
    },
];
const adressSchema = new mongoose.Schema({
    streetName: String,
    streetNumber: Number,
    postCode: Number,
    city:String

});
const adressModel= mongoose.model("adresses",adressSchema);

 //creation des bd

// studentModel.deleteMany({}).
// then(()=>{
//     studentModel.create(students);
// });

// adressModel.deleteMany({}).
// then(()=>{
//     adressModel.create(studentAdress);
// });

const studentAddAdresse=(student,adress)=>{
    adressModel.findOne({
        streetName:adress
    }).then((adress)=>{
        studentModel.findOne({
            firstName:student
        }).then((student)=>{
            student.adress.push(adress._id);
            studentModel.updateOne({
                firtsName:student
            },
                student
            ).then((response)=>{console.log(response)})
        })
    })
}
studentAddAdresse("Saint","rue du pignon");