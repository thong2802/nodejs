class NewController {
    //[get] /news
    index(req, res) {
        res.render('welcome');
    }
}
module.exports = new NewController();
