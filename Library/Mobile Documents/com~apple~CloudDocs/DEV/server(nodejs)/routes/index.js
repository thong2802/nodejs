const API_KEY = 1234
const { Router } = require('express')
const express = require('express')
const routes  = Router()
const moment = require('moment')

//GEt
routes.get('/',  (req, res, next) =>{
    res.send('HELLO ')
})

module.exports = routes

