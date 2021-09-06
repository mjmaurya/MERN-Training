const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ChatSchema=new Schema(
    {
        username:{
            type:String,
            required:true,
            max:100
        },
        message:{
            type:String,
            required:true,
            max:500
        }
    }
)
module.exports = mongoose.model('allChats', ChatSchema);