const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    userId: {type:String, required:true},
    displayName: {type:String},
    password: {type:String}
})


module.exports = mongoose.model('User', userSchema)