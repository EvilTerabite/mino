const mongoose = require('mongoose');

const aircraftSchema = new mongoose.Schema({
    fin: {type:String},
    registration: {type:String},
    type: {type:String},
    manufacturer: {type:String},
    code: {type:String}

})

module.exports = mongoose.model('Aircraft', aircraftSchema)