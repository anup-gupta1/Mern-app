const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create Schema for User

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address : {
        type : String,
        required : true
    },
    contact : {
        type : Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('users', UserSchema);