const express = require('express');
const morgan  = require('morgan');

const app = express();
app.set('port',process.env.PORT)
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api/persona",require('./routes/persona.routes'));
app.use("/api/hijo",require('./routes/hijo.routes'));


module.exports = app;

