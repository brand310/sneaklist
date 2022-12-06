const express = require('express')
const sneakers = express.Router()
const Sneaker = require('../models/sneaker')

// SNEAKERS INDEX
sneakers.get('/', (req, res) => {
    res.json({message: 'GET stub all sneakers'})
})

// GET to SHOW a single sneaker
sneakers.get('/:id', (req, res) => {
    res.json({message: 'GET stub single sneaker'})
})

// POST to CREATE a new sneaker
sneakers.post('/', async (req, res) => {
    const { name, brand, size, image, comment } = req.body
    try {
        const sneaker = await Sneaker.create(req.body)
        res.status(200).json(sneaker)
    } catch(error){
        res.status(400).json({error: error.message})
    }
    // res.json({message: 'POST a new sneaker'})
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