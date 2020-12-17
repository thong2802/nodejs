const express = require('express');
const app = express();
const path = require('path');
var morgan = require('morgan');
const handlebars  = require('express-handlebars');
const { dirname } = require('path');
const port = 3000;
app.use(express.static(path.join(__dirname, 'public')));
//HTTP logger
app.use(morgan('combined'));

// template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
})); // noi rang app minh dang sd template engine la Handlebars
app.set('view engine', 'hbs');// 
app.set('views', path.join(__dirname, 'resources/views'));
console.log('PATH: ',path.join(__dirname, 'resources/views'));
app.get('/Home', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})