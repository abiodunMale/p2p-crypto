const mongoose = require('mongoose');

const Dbconnection = () => {
    mongoose.connect(process.env.CONNECTION_STRING, {
        useFindAndModify: true, useUnifiedTopology: true, useCreateIndex: true,useNewUrlParser: true
    })
    .then(() => console.log('Database successfully connected') )
    .catch((err) => console.log(err));
};

module.exports  = Dbconnection;