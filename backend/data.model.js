const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Posts = new Schema({
    message: {
        type: String
    },
    time: {
        type: String
    },
    include: {
        type: Boolean
    }
});

module.exports = mongoose.model('Posts', Posts);