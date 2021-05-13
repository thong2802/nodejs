const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql')
const myConnection = require('express-myconnection')
const bodyParser = require('body-parser')

const config = require('./db')
const dbOptions = {
    host : config.database.host,
    user : config.database.user,
    password: config.database.password,
    port : config.database.port,
    db : config.database.db
}

const routes = require('./routes/index')
const publicDir = (__dirname+ './public/'); // set static dir for display iamge

app.use(express.static(publicDir));
app.use(myConnection(mysql, dbOptions, 'pool'))
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());





app.use('/', routes)
app.listen(port, () => {
    console.log('Finish')
})
