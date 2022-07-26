const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const { DateTimePicker } = require('react-datetime-range-super-picker');

const userSchema = new Schema({


    firstName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    lastName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!']
    },

    password: {
        type: String,
        required: true
    },
    // photo of user

    userPhoto: {
        type: String,
        required: true
    },

    phoneNumber: {
        type: Number,
        required: true,
        unique: true
    },

    joinedDate: {
        type: Date,
        default: Date.now,
    },

    socialMedia: [
        {
            type: Schema.Types.ObjectId,
            ref: 'SocialMedia'
        }
    ],

    personalWebsite: {
        type: String,
        trim: true
    },

    userBio: {
        type: String,
        trim: true,
        maxlength: 500
    },

    jobsWorked: {
        type: Number
    },

    creditCard: {
        type: Number,
        required: true,
        unique: true,
    },

    services: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Services'
        }
    ],

    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ],


    speciality: {
        type: String,
        enum: ['kids', 'food', 'architecture', 'landscape', 'movie', 'wedding', 'Portrait',
            'sports', 'concerts', 'live shows', 'family'
        ]
    },

    // photos of work

    workPhotos: {
        type: String
    },

    // videos of work

    workVideos: {
        type: String
    }
})

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};


const User = model('User', userSchema)

module.exports = User