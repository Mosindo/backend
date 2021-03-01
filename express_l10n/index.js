const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const translations = require('./translations.json')

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.listen(8000,()=>{console.log('server launch')});



app.get('/:lang?', (req, res) => {
    if(req.params.id == "fr"){
        res.send('home', {
            lang:translations[0].traductio
          });
    }
    else if(req.params.id == "es"){
        res.send('home', {
            lang: translations[1].traductio
          });
    }
    else if(req.params.id == "en"){
        console.log(translations[2].traductio);
        res.send('home', {
            lang: translations[2].traductio
          });
    }
    else{
        res.send('home', {
            lang: 'Error'
          });
    }
    
});

