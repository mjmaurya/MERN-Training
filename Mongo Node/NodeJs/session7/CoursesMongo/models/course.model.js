const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CourseSchema = new Schema({
    cname: {
        type: String, 
        required: true, 
        max: 200
    },
    iname: {
        type: String, 
        required: true,
        max: 100
    },
    cdisc: {
        type: String,
        required: true,
        max: 500
    },
    cprice: {
        type: String,
        required: true
    },
    cduration: {
        type: String, 
        required: true
    }
});

// Export the model
module.exports = mongoose.model('Course', CourseSchema);