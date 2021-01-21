const express = require('express');
//const app = express()
const router = express.Router();
const womencontroller = require('../app/controllers/WomenController');

router.get('/', womencontroller.women);

module.exports = router;
