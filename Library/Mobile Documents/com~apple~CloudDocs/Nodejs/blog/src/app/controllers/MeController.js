const Course = require('../model/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class MeController {
    //[get] /me/storedCourses
    storedCourses(req, res, next) {
      Course.find({}, function (err, courses) {
        if (!err) {
            //   courses= courses.map(courses=>courses.toObject());
            res.render('me/stored-courses', {
                courses: mutipleMongooseToObject(courses),
            });
        } else {
            next(err);
            //res.status(400).json({error: 'Error!!'});
        }
    });
  }
}
module.exports = new MeController();
