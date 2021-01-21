const express = require('express');
const app = express();
const path = require('path');
var morgan = require('morgan');
const handlebars = require('express-handlebars');
const { dirname } = require('path');
const { link } = require('fs');
const routes = require('./routes');
const db = require('./config/db/index');
///reatijs

const port = 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extendeds: true,
    }),
);
// connnect db
db.connect();

app.use(express.json());
//HTTP logger
//
app.use(morgan('combined'));

// template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum : (a, b) => a + b,
        }
    }),
); // noi rang app minh dang sd template engine la Handlebars
app.set('view engine', 'hbs'); //
app.set('views', path.join(__dirname, 'resources', 'views'));
//console.log('PATH: ', path.join(__dirname, 'resources/views'));

// routes init
routes(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
