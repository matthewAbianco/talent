const { Schema, model } = require('mongoose');

const jobSchema = new Schema({

    jobName: {
        type: String,
        required: true,
        trim: true

    },

    location: {
        type: String,
        required: true,
        trim: true
    },

    jobPay: {
        type: Number,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    peopleNeeded: {
        type: Number,
        required: true
    },

    // same skill set as in user model

    jobSpeciality: {
        type: String,
        enum: ['kids', 'food', 'architecture', 'landscape', 'movie', 'wedding', 'Portrait',
            'sports', 'concerts', 'live shows', 'family'
        ]
    },

    jobLength: {
        type: Number,
        required: true
    },

    jobOwner: {
        type: String,
        required: true
    },

    certification: {
        type: String,
        required: true
    },

    jobExperience: {
        type: String,
        required: true
    }

})

const Job = model('Job', jobSchema)

module.exports = Job