const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const translations = require('./translations.json');
const port = 8000;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.get('/', function (req, res) {
    res.render('home',{lang :translations[0].traductio});
});

app.get('/login', function (req, res) {
    res.render('login', {error:false});
});

app.use(express.urlencoded({extended:true}))
app.post('/login', function (req, res) {

   if(  req.body.password.length < 3 ){
       res.render('login',{error:true})
   }else{ res.redirect('/');}
  
});

app.listen(port,()=>{console.log('server launch')});



app.get('/:lang?', (req, res) => {
    if(req.params.lang == "fr"){
    res.render('home',{lang :translations[0].traduction})}
    else if(req.params.lang== "es"){
        res.render('home',{lang :translations[1].traduction})}
    else if(req.params.lang== "en"){
        res.render('home',{lang :translations[2].traduction})}
    else {  res.render('home')};
 
});

