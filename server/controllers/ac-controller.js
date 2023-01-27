const mongoose = require('mongoose')
const Aircraft = require('../models/aircraft');
const HttpError = require('../util/http-error');
const url = 'mongodb+srv://jeremy:iFNDKwFEvyiX1WcB@cluster0.e5iyjcd.mongodb.net/tow?retryWrites=true&w=majority';


mongoose.connect(url)
    .then(() => {
        console.log('database connected!')
    })
    .catch('database not connected!');


async function listAircraft(req,res,next) {
    const aircraftList = await Aircraft.find().exec();
    res.json({aircraftList})
}

async function getFin(req,res,next) {
    const fin = req.params.fin
    const aircraftList = await Aircraft.find().exec();

    const myAircraft = aircraftList.find((ac) => {
        return ac.fin === fin;
    })

    if(!myAircraft) {
        return next(new HttpError('aircraft not found', 404))
    }

    res.json({myAircraft})
}

async function addAircraft(req,res,next) {
    const aircraftList = await Aircraft.find().exec();
    const {fin, registration, manufacturer, type, code} = req.body;
    const hasFin = aircraftList.find((ac) => {
        return ac.fin === fin
    })
    const hasReg = aircraftList.find((ac) => {
        return ac.registration === registration
    })

    if(hasFin) {
        return next(new HttpError('fin already exists', 409))
    }
    if(hasReg) {
        return next(new HttpError('registration already exists', 409))
    }
    const newAircraft = new Aircraft({
        fin: fin,
        registration: registration,
        manufacturer: manufacturer,
        type: type,
        code: code
    })

    const result = await newAircraft.save();
    res.status(201).json({newAircraft})
}

exports.addAircraft = addAircraft;
exports.listAircraft = listAircraft;
exports.getFin = getFin;