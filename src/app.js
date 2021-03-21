const express = require('express');
const morgan  = require('morgan');
const cors = require('cors');
const app = express();
app.set('port',process.env.PORT)
app.use(morgan('dev'))


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://mean.chevere.ga');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  res.header('Allow', 'GET, POST, PATCH, DELETE');
  next();
});






app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api/persona",require('./routes/persona.routes'));
app.use("/api/hijo",require('./routes/hijo.routes'));


module.exports = app;

