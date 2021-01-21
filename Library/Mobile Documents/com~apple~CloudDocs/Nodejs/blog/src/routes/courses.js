const express = require('express');
//const app = express()
const router = express.Router();
const coursescontroller = require('../app/controllers/CouresController');
router.get('/create', coursescontroller.create);
router.post('/store', coursescontroller.store);
router.get('/:slug', coursescontroller.show);

module.exports = router;
