const express = require ("express");
const mongoose = require ("mongoose");
const userModel = require ("./models/user");
const bodyParser= require ("body-parser");
const bcryptjs =require ("bcryptjs");



const app =express();
const port =8000;

app.listen(port,()=>{
    console.log("ready to code")
});

mongoose.connect("mongodb://localhost:27017/login",{ useNewUrlParser: true,useUnifiedTopology: true  },()=>{
    console.log("DB connectée");
})

app.use(bodyParser.json());

app.post("/users", async (req,res)=>{
    try{
        const user= await userModel.findOne({
            email:  req.body.email,
        })
        if(user){
            res.status(status).send(`email ${req.body.email} already exist`);
            return;
        }
        if(req.body.password.lenght <8){
            res.status(400).send("password too short ");
            return;
        }
        if(req.body.confirmPassword !=req.body.password){
            res.status(400).send(" wrong password confirmed");
            return;
        }
        await userModel.create({
            email: req.body.email,
            password:bcryptjs.hashSync(req.body.password),
            confirmedPassword:bcryptjs.hashSync(req.body.confirmPassword),
            firstName :req.body.firstName,
            surname: req.body.surname,
            dateOfBirth: req.body.dateOfBirth 
        });
        res.send("User create");
    }catch(err){
        console.log(err);
        res.status(500).send("seems that there is an error");//revoir les erreur http
    }
    
});

app.post("/login",async (req,res)=>{
    const user =await userModel.findOne({
        email:req.body.email
    }).exec();
    console.log(await bcryptjs.compareSync(user.password, req.body.password));
})