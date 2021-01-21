const meRoute = require('./me');
const menRoute = require('./men');
const womenRoute = require('./women');
const kidRoute = require('./kid');
const sitesRoute = require('./site');
const coursesRoute = require('./courses');
function route(app) {
    app.use('/me',meRoute);
    app.use('/men', menRoute);
    app.use('/women', womenRoute);
    app.use('/kids', kidRoute);
    app.use('/courses', coursesRoute);
    app.use('/home', sitesRoute);
}

module.exports = route;
