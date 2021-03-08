const express = require ("express");
const app = express();
const cors = require ("cors");
const bodyParser = require("body-parser")
const port = 8000 ;

app.use(cors());
app.use(bodyParser.json());
app.listen(port,()=>{ console.log("ready to code")})

const students =[{
     name :"" 
    }]

app.get('/',(req,res)=>{
    res.send('Yatta');
})

app.get('/students',(req,res)=>{
    res.json(students);
})

app.get('/students/:id',(req,res)=>{
    res.json(students[req.params.id]);
})
 app.post("/students",(req,res)=>{
     students.push(req.body)
 })
app.get('*', (req, res)=> {
    res.send('Erreur 404');
});