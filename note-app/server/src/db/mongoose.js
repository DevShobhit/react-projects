const mongoose = require('mongoose');
require('dotenv').config();

//connectionUrl
const connectionUrl = process.env.MONGO_DB_URL;

//Connecting with database
mongoose.connect(connectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('MongoDB Connected…')
}).catch(err => console.log(err));

