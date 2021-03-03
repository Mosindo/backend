const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const port =3000;


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('public/css'));
app.listen(port ,()=>{
    console.log("ready to code")
})

app.get('/', function (req, res) {
    res.render('home');
});


