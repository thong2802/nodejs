const Course = require('../model/Course');
const { mongooseToObject } = require('../../util/mongoose');
class CourseController {
    //[get] /course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((courses) => {
                res.render('courses/show', {
                    courses: mongooseToObject(courses),
                });
            })
            .catch(next);
    }
    ///[Get] /courses / create
    create(req, res, next) {
        res.render('courses/create');
    }
    ///[post] /courses / store
    store(req, res, next) {
        //res.render('courses/store');
        // res.json(req.body)

        const insert = req.body;
        const courses = new Course(insert);
        courses.save();

        res.send('Them thanh cong');
    }
}
module.exports = new CourseController();
