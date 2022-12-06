// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')


// CONFIGURATION & MIDDLEWARE
require('dotenv').config()
const app = express()
const PORT = process.env.PORT
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to mongo on: ', process.env.MONGO_URI)
})


// ROOT INDEX
app.get('/', (req, res) => {
    res.json({message: 'Welcome to sneaklist!'})
})

// SNEAKERS CONTROLLER
const sneakersController = require('./controllers/sneakers_controllers')
app.use('/sneakers', sneakersController)

// LISTEN
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})