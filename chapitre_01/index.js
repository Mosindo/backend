const express = require('express');
const app = express();

const port = 8000;
const autor=[ 'Lawrence Nowell, UK',
'William Shakespeare, UK',
'Charles Dickens, US',
'Oscar Wilde, UK',]
const Books =['Beowulf','Hamlet, Othello, Romeo and Juliet, MacBeth','Oliver Twist, A Christmas Carol','The Picture of Dorian Gray, The Importance of Being Earnest']
   
const autorsData =[
    {
        name:'Lawrence Nowell',
        nationality :'UK',
        books:['Beowulf'],
    },
    {
        name:'William Shakespeare',
        nationality :'UK',
        books:['Hamlet, Othello, Romeo and Juliet, MacBeth'],
    },
    {
        name:'Charles Dickens',
        nationality :'US',
        books:['Oliver Twist, A Christmas Carol'],
    },
    {
        name:'Oscar Wilde',
        nationality :'UK',
        books:['The Picture of Dorian Gray, The Importance of Being Earnest'],
    }
]



app.listen(port, () => {
  console.log('Server started on port: ' + port);
  console.log(autor.length)
  
});

app.get('/', (req, res) => {
    res.send('Autors');
  });


  app.get('/autors/:id', (req, res) => {
    if(req.params.id == 1){
        res.send(autor[0])
    }
    else if(req.params.id == 2){
        res.send(autor[1])
    }
    else if(req.params.id == 3){
        res.send(autor[2])
    }
    else if(req.params.id == 4){
        res.send(autor[3])
    }
    else{
        res.send(res.send(`The Autor with the ID ${req.params.id} does not exist`))
    }
    
});

app.get('/autors/:id/books', (req, res) => {
    if(req.params.id == 1){
        res.send(Books[0])
    }
    else if(req.params.id == 2){
        res.send(Books[1])
    }
    else if(req.params.id == 3){
        res.send(Books[2])
    }
    else if(req.params.id == 4){
        res.send(Books[3])
    }
    else{
        res.send(`The book with the ID ${req.params.id} does not exist`)
    }
    
});

app.get('/json', (req, res) => {
    res.jsonp({autorsData})
  });

  app.get('/json/autors/:id', (req, res) => {
    if(req.params.id == 1){
        res.jsonp({name:autorsData[0].name, nationality:autorsData[0].nationality})
    }
    else if(req.params.id == 2){
        res.jsonp({name:autorsData[1].name, nationality:autorsData[1].nationality})
    }
    else if(req.params.id == 3){
        res.jsonp({name:autorsData[2].name, nationality:autorsData[2].nationality})
    }
    else if(req.params.id == 4){
        res.jsonp({name:autorsData[3].name, nationality:autorsData[3].nationality})
    }
    else{
        res.jsonp(`The Autor with the ID ${req.params.id} does not exist`)
    }
    
});

app.get('/json/autors/:id/book', (req, res) => {
    if(req.params.id == 1){
        res.jsonp({Books:autorsData[0].books})
    }
    else if(req.params.id == 2){
        res.jsonp({Books:autorsData[1].books})
    }
    else if(req.params.id == 3){
        res.jsonp({Books:autorsData[2].books})
    }
    else if(req.params.id == 4){
        res.jsonp({Books:autorsData[3].books})
    }
    else{
        res.jsonp(`The book with the ID ${req.params.id} does not exist`)
    }
    
});