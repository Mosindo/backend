const express = require('express');
const app = express();
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.listen(8000,()=>{console.log('server launch')});

app.get('/:lang?', function (req, res) {
    res.render('home');
});

