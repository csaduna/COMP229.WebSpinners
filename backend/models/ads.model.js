let mongoose = require('mongoose');

// Create a model class
let adModel = mongoose.Schema(
    {
        item: String,
        qty: Number,
        status: String,
        desc: String,
        size: {
            l: Number,
            w: Number,
            uom: String
        },
        qaList: []
    },
    {
        collection: "ads"
    }
);

module.exports = mongoose.model('Ads', adModel);