const { Schema, model } = require('mongoose');

const jobSchema = new Schema({

    jobName: {
        type: String,
        required: true,
        trim: true

    },

    // location

    // pay

    // date and time posted

    createdAt: {
        type: Date,
        default: Date.now
    },

    // number of people needed

    // skillset desired

    // job length

    // name of employer/ business

    // license/certification desired

    // experience/education

    // job tags for search feature filter


})

const Job = model('Job', jobSchema)

module.exports = Job