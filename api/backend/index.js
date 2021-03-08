const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 8000;

const debug = (req, res, next) => {
    console.log("j'ai eu une nouvelle requete", new Date());
    next();
}

const caseName = (req, res, next) => {
    req.body.name = req.body.name.toLowerCase();
    next();
}

app.use(bodyParser.json());
app.use(cors());
app.use(debug);
app.use(caseName);

app.listen(port, () => {
    console.log(`Server launched on ${port}`);
})

const superHeros = [
    {
        name: "Iron Man",
        power: ["money"],
        color: "red",
        isAlive: true,
        age: 46,
        image: "https://blog.fr.playstation.com/tachyon/sites/10/2019/07/unnamed-file-18.jpg?resize=1088,500&crop_strategy=smart"
    },
    {
        name: "Thor",
        power: ["electricty", "worthy"],
        color: "blue",
        isAlive: true,
        age: 300,
        image: "https://www.bdfugue.com/media/catalog/product/cache/1/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9782809465761_1_75.jpg"
    },
    {
        name: "Daredevil",
        power: ["blind"],
        color: "red",
        isAlive: false,
        age: 30,
        image: "https://aws.vdkimg.com/film/2/5/1/1/251170_backdrop_scale_1280xauto.jpg"
    }
]

// CRUD
// Create => HTTP Post
// Read => HTTP Get
// Update => HTTP Put
// Delete => HTTP Delete

app.get("/heroes", (req, res) => {
    console.log(superHeros);
    res.json(superHeros);
})

app.get("/heroes/:id", (req, res) => {
    res.json(superHeros[req.params.id]);
})

app.get("/heroes/:id/powers", (req, res) => {
    res.json(superHeros[req.params.id].power)
})

app.post("/heroes", caseName, (req, res) => {
    if (req.body.name.toLowerCase() === "batman") {
        res.send("Bien joué, mais je veux pas batman !!!!")
        return;
    }

    superHeros.push(req.body);
    res.send("ok, héros ajouté");
})

app.post("/heroes/:id/powers", (req, res) => {
    superHeros[req.params.id].power.push(req.body);
    res.send("Pouvoir ajouté !");
})