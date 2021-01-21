const express = require('express');
//const app = express()
const router = express.Router();
const mecontroller = require('../app/controllers/MeController');
router.get('/stored-courses', mecontroller.storedCourses);

module.exports = router;