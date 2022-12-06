// DEPENDENCIES
const express = require('express')


// CONFIGURATION & MIDDLEWARE
require('dotenv').config()
const app = express()
const PORT = process.env.PORT
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
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