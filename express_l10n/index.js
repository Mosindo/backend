const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const translations = require("./translations");
console.log(translations); 

// fetch('./translations.json')
//   .then(response => response.json()) 
//   .then(result => { console.log(result) });

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.listen(8000,()=>{console.log('server launch')});



app.get('/:lang', (req, res) => {
    if(req.params.id == "fr"){
        res.send(translations[0].traductio ,)
    }
    else if(req.params.id == "es"){
        res.send(translations[1].traductio)
    }
    else if(req.params.id == "en"){
        res.send(translations[2].traductio)
    }
    else{
        res.send(res.send())
    }
    
});

