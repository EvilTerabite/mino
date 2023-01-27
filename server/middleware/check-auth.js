const HttpError = require("../models/http-error");
const jwt = require('jsonwebtoken');

module.exports = function checkAuth(req,res,next) {
    try {
        const token = req.headers.authorization.split(' ')[1]; //Authorization: 'Bearer TOKEN'
        if(!token) {
            return next(new Error('auth failed'))
        }
        const decodedToken = jwt.verify(token, 'o01pu2IQgxX2&9ItMngx^Fa44%o0#GSk^Xd09onrJetwacyV@K')

        req.userData = {userId: decodedToken.uuid};
        next()

    } catch(err) {
        return next(new HttpError('auth failed',401))
    }

}