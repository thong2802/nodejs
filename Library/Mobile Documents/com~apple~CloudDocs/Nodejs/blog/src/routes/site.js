const express = require('express');
//const app = express()
const router = express.Router();
const sitecontroller = require('../app/controllers/SiteController');


router.get('/', sitecontroller.home);

module.exports = router;
