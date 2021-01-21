const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Men = new Schema(
    {
        name: { type: String, maxlength: 255 },
        image_men: { type: String },
        slug: { type: String },
        price: { type: String },
    },
    {
        timestamps: true,
    },
);


module.exports = mongoose.model('Men', Men);

