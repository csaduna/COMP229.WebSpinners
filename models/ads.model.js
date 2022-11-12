let mongoose = require('mongoose');

// Create a model class
let adModel = mongoose.Schema(
    {
        item: String,
        qty: Number,
        tags: [],
        status: String,
        size: {
            l: Number,
            w: Number,
            uom: String
        }
    },
    {
        collection: "ads"
    }
);

module.exports = mongoose.model('Ads', adModel);