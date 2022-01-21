// jshint esversion:8

const express = require('express');
const app     = express();
const hbs     = require('hbs'); 

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  //console.log(req);
  res.render('index');
});

// route params - gets info from the url, in the specified position in the route path
app.get('/users/:username/books/:bookId', (req, res) => {
    res.send(req.params);
});

// query params => gets input name as key and input value as value => index.hbs
app.get('/search', (req, res, next) => {
    res.send(req.query);
});
  

app.listen(3000, () => console.log('App listening on port 3000!'));
