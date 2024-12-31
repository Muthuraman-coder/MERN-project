const mongoose = require('mongoose');
const schema  = mongoose.Schema;

const routines = new schema({
    name : {
        type : String,
        required : true
    },
    body : {
        type : String,
        required : true
    },
    duration : {
        type : String,
        required : true
    },
    user_id : {
        type : String,
        required : true
    }
},{ timestamps: true })

const dr = mongoose.model('daily-routines' , routines)
module.exports = dr;
