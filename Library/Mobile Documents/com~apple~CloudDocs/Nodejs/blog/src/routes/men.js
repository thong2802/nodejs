const express = require('express');
//const app = express()
const router = express.Router();
const mencontroller = require('../app/controllers/MenController');

router.get('/', mencontroller.men);

module.exports = router;
