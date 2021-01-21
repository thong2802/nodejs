const express = require('express');
//const app = express()
const router = express.Router();
const kidcontroller = require('../app/controllers/KidController');

router.get('/', kidcontroller.kid);

module.exports = router;
