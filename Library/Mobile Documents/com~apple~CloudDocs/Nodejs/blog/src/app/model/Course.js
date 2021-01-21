const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Courses = new Schema(
    {
        name: { type: String, maxlength: 255 },
        image_noibat: { type: String },
        image_men: { type: String },
        image_kid: { type: String },
        slug: { type: String },
        price: { type: String },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Course', Courses);

