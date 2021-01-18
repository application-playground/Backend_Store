const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require('cors');

// Set up the express app
const serverApp = express();

const port = process.env.APPLICATION_PORT || 4100;
serverApp.set('secretKey', 'nodeRestApi'); // jwt secret token

serverApp.use(logger('dev'));
serverApp.use(cookieParser());
serverApp.use(bodyParser.json());
serverApp.use(bodyParser.urlencoded({ extended: true }));
serverApp.use(express.static(path.join(__dirname, 'public')));

/* ************************************************************************ */
var originsWhitelist = ['http://localhost:8000'];
var corsOptions = {
    origin: function (origin, callback) {
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
    },
    credentials:true
}
// HERE is the magic
serverApp.use(cors(corsOptions));
/* ************************************************************************ */

serverApp.get('/favicon.ico', (req, res) => { res.sendStatus(204); });

const indexRoute = require('./server/routes');
// // public route
serverApp.use('/api', indexRoute);
// require('./server/routes')(serverApp);

/* ---------------------------------------------------------------------------------- */
// function validateUser(req, res, next) {
    
//     jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function (err, decoded) {
//         if (err) {
//             res.json({ status: "error", message: err.message, data: null });
//         } else {
//             // add user id to request
//             req.body.userId = decoded.id;
//             next();
//         }
//     });
// }


// handle 404 error
// express doesn't consider not found 404 as an error so we need to handle 404 explicitly
serverApp.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// handle errors
serverApp.use((err, req, res, next) => {  
  console.log(err);
  if (err.status === 404)
      res.status(404).json({ message: "Not found" });
  else
      res.status(500).json({ message: "Something looks wrong :( !!!" });
});

/* ---------------------------------------------------------------------------------- */
serverApp.listen(port, () => { console.log(`application running ${port}`); });
/* ---------------------------------------------------------------------------------- */
module.exports = serverApp;