const express = require('express')
const sneakers = express.Router()

// SNEAKERS INDEX
sneakers.get('/', (req, res) => {
    res.json({message: 'GET stub all sneakers'})
})

// GET to SHOW a single sneaker
sneakers.get('/:id', (req, res) => {
    res.json({message: 'GET stub single sneaker'})
})

// POST to CREATE a new sneaker
sneakers.post('/', (req, res) => {
    res.json({message: 'POST a new sneaker'})
})

// PUT to UPDATE a sneaker
sneakers.put('/:id', (req, res) => {
    res.json({message: 'Update a sneaker'})
})

// DELETE a sneaker
sneakers.delete('/:id', (req, res) => {
    res.json({message: 'DELETE a single sneaker'})
})

// EXPORT
module.exports = sneakers