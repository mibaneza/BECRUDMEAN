const express = require('express');
const morgan  = require('morgan');
const cors = require('cors');
const app = express();
app.set('port',process.env.PORT)
app.use(morgan('dev'))

var allowedOrigins = ['http://localhost:4200',
                      'http://mean.chevere.ga'];
app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));







app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api/persona",require('./routes/persona.routes'));
app.use("/api/hijo",require('./routes/hijo.routes'));


module.exports = app;

