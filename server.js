const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/api/users');


const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


//DB config

const db = require('./config/keys').mongoURI;

//connect to mongoDB by using mongoose

mongoose.connect(db)
    .then(() => console.log('MongoDb connected'))
    .catch(err => console.log(err));




//Use Routes
app.use('/api/users', users);

const port =  5000;

app.listen(port, () => console.log(`server runnning on ${port}`));