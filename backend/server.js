const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')
const bodyParser = require('body-parser')

const port = process.env.PORT || 4000;

const app = express();
var cors = require('cors')

app.use(cors())
app.use(bodyParser.json());
app.use(express.json({limit:'1mb'}))
app.use(express.urlencoded({ extended: false}))

app.use((req, res, next) => {
    console.log(req.url + ' : ' + req.body);
    next();
})
app.use(bodyParser.json())

connectDB();

app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/markers', require('./routes/markerRoutes'));

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))