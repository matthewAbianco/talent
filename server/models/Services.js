const { Schema, model } = require('mongoose')

const servicesSchema = new Schema({

    serviceName: {
        type: String,
        required: true,
        trim: true
    },

    cost: {
        type: Number,
        required: true,

    },

    // length

    jobLength: {
        type: Number,
        required: true
    },

    // details about service
    jobDetails: {
        type: String,
        required: true
    }

})

const Service = model('Service', serviceSchema)

module.exports = Service 