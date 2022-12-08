// REQUIRE MONGOOSE
const mongoose = require('mongoose')
const { Schema } = mongoose


// SneakerSchema constructor
const sneakerSchema = new Schema ({
    name: { type: String, required: true },
    brand: {
        type: String,
        enum: ['Adidas', 'Converse', 'Jordan', 'New Balance', 'Nike', 'Puma', 'Reebok', 'Vans']
    },
    size: { type: Number, required: true },
    image: { type: String, default: 'https://place-puppy.com/300x300' },
    comment: { type: String, required: true }
}, { timestamps: true })


// Export Schema
const Sneaker = mongoose.model('Sneaker', sneakerSchema)
module.exports = Sneaker