const Course = require('../model/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    //[get] /home
    home(req, res, next) {
        Course.find({}, function (err, courses) {
            if (!err) {
                //   courses= courses.map(courses=>courses.toObject());
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            } else {
                next(err);
                //res.status(400).json({error: 'Error!!'});
            }
        });
        //res.render('home');
        /* Course.find({})
             .then(courses=> res.json(courses));*/
    }
    

}
module.exports = new SiteController();
