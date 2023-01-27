const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const ip = require('ip');
const HttpError = require('./util/http-error');
const acRoutes = require('./routes/ac-routes')
const port = 5000;

const app = express();

//Parse request body into JSON
app.use(bodyParser.json());

//Appy CORS headers
app.use(cors())

//Requests
app.use('/api/ac', acRoutes)

//Error handling
app.use((req,res,next) => {
    const error = new HttpError('route not found', 404);
    throw error;
})

app.use((error,req,res,next) => {
    if(res.headerSent) {
        return next(error);
    }

    res.status(error.code || 500);
    res.json(error.message || {message: "something went wrong"})
})


//Open server
app.listen(5000, () => {
    console.log('server listening, connect via ' + ip.address() + ':' + port)
})