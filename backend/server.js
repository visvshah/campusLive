const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')

const port = process.env.PORT || 8000

const app = express()

app.listen(port, () => console.log(`Server started on port ${port}`))