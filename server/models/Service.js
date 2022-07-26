const { Schema, model } = require('mongoose')

const serviceSchema = new Schema({

    serviceName: {
        type: String,
        required: true,
        trim: true
    },

    cost: {
        type: Number,
        required: true,
    },

    jobLength: {
        type: Number,
        required: true
    },

    jobDetails: {
        type: String,
        required: true
    }

})

const Service = model('Service', serviceSchema)

module.exports = Service 