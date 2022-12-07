const express = require('express')
const sneakers = express.Router()
const Sneaker = require('../models/sneaker')
const mongoose = require('mongoose')

// SNEAKERS INDEX
sneakers.get('/', async (req, res) => {
    const sneakers = await Sneaker.find().sort({name: 1})
    res.status(200).json(sneakers)
})

// GET to SHOW a single sneaker
sneakers.get('/:id', async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(404).json({error: 'Sneaker does not exist.'})
    }
    const sneaker = await Sneaker.findById(req.params.id)
    if (!sneaker) {
        return res.status(404).json({error: 'Sneaker does not exist.'})
    }
    res.status(200).json(sneaker)
})

// POST to CREATE a new sneaker
sneakers.post('/', async (req, res) => {
    const { name, brand, size, image, comment } = req.body    
    // Adding document to db
    try {
        const sneaker = await Sneaker.create(req.body)
        res.status(201).json(sneaker)
    } catch(error){
        res.status(404).json({error: error.message})
    }    
})

// PUT to UPDATE a sneaker
sneakers.put('/:id', async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(404).json({error: 'Sneaker does not exist.'})
    }
    const sneaker = await Sneaker.findByIdAndUpdate(req.params.id, req.body)
    if (!sneaker) {
        return res.status(404).json({error: 'Sneaker does not exist.'})
    }
    res.status(202).json(sneaker)
})

// DELETE a sneaker
sneakers.delete('/:id', async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(404).json({error: 'Sneaker does not exist.'})
    }
    const sneaker = await Sneaker.findByIdAndDelete(req.params.id)
    if (!sneaker) {
        return res.status(404).json({error: 'Sneaker does not exist.'})
    }
    res.status(204).json(sneaker)
})

// EXPORT
module.exports = sneakers