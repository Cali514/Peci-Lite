const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    FirstName: String,    
    email: String,
    password: String,
    UnixId: String,
    
});


module.exports = mongoose.model('user', userSchema)