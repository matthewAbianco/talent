const { Schema, model } = require('mongoose');

const reviewSchema = new Schema({

    sessionImage: {
        type: String
    },

    customer: {
        type: String,
        required: true
    },

    starRanking: {
        type: Number,
        required: true
    },

    feedback: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now,
    }

})

const Review = model('Review', reviewSchema)

module.exports = Review