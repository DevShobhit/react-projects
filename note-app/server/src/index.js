const express = require('express');
require('./db/mongoose')
const User = require('./models/users')
const Tasks = require('./models/tasks')
const Notes = require('./models/notes')
const userRouter = require('./routers/users')
const taskRouter = require('./routers/tasks')
const noteRouter = require('./routers/notes')
const cors = require('cors');

var whitelist = ['http://localhost:3000']
var corsOptions = {
    credentials: true,
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}


const app = express()
const port = process.env.PORT || 3001



app.use(express.json());
app.use(cors(corsOptions));
app.use(userRouter)
app.use(taskRouter)
app.use(noteRouter)

app.listen((port), () => {
    console.log('Server is up on port' + port)
})