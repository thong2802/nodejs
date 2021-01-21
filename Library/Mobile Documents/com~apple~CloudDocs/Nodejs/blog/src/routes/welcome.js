const express = require('express');
//const app = express()
const router = express.Router();
const newcontroller = require('../app/controllers/NewController');
router.get('/', newcontroller.index);

module.exports = router;
