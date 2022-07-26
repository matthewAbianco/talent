const { Schema, model } = require('mongoose')

const socialMediaSchema = new Schema({

    instagram: {
        type: String,
        trim: true
    },

    facebook: {
        type: String,
        trim: true
    },

    twitter: {
        type: String,
        trim: true
    },

    myspace: {
        type: String,
        trim: true
    },

    tiktok: {
        type: String,
        trim: true
    },

})

const SocialMedia = model('SocialMedia', socialMediaSchema)

module.exports = SocialMedia 