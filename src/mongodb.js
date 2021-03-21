const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://urg5ayk0fg5o3auodmo7:NMjay3k01w3f36dGoY32@cluster0.hg2fo.mongodb.net/empleados?retryWrites=true&w=majority',
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
.then(() => console.log("mongodb ready"))
.catch((err) => console.error(err));