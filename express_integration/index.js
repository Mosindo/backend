const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const port =3000;

const cuiZine = [
    {
        pageName:"/",
        pageHtml:"index.html"
    },
    {
        pageName:"/contact",
        pageHtml:"contact.html"
    },
    {
        pageName:"/page2",
        pageHtml:"page2.html"
    },
    {
        pageName:"/post",
        pageHtml:"post.html"
    },
    {
        pageName:"/recipe",
        pageHtml:"recipe.html"
    },
    {
        pageName:"/team-members",
        pageHtml:"team-members.html"
    },
    {
        pageName:"/team",
        pageHtml:"team.html"
    },
]

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.listen(port ,()=>{
    console.log("ready to code")
})

app.get('/', function (req, res) {
    res.redirect('index.html');
});

app.get('/:pageName?', function (req, res) {
    // const page = cuiZine.find(
    //     (cuiZine)=> cuiZine.pageName === req.params.pageName
    // )
    // res.redirect(page.pageHtml);
});
