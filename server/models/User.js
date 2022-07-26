const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const { DateTimePicker } = require('react-datetime-range-super-picker');

const userSchema = new Schema({


    firstName: {
        type: String
    },

    // lastName: {
    //     type: String,
    //     required: true,
    //     unique: true,
    //     trim: true
    // },

    // email: {
    //     type: String,
    //     required: true,
    //     unique: true,
    //     match: [/.+@.+\..+/, 'Must match an email address!']
    // },

    // password: {
    //     type: String,
    //     required: true
    // },
    // // photo of user

    // phoneNumber: {
    //     type: Number,
    //     required: true,
    //     unique: true
    // },

    // joinedDate: {
    //     type: Date,
    //     default: Date.now
    // },

    // instagram: {
    //     type: String,
    //     trim: true
    // },

    // facebook: {
    //     type: String,
    //     trim: true
    // },

    // twitter: {
    //     type: String,
    //     trim: true
    // },

    // myspace: {
    //     type: String,
    //     trim: true
    // },

    // tiktok: {
    //     type: String,
    //     trim: true
    // },

    // personalWebsite: {
    //     type: String,
    //     trim: true
    // },

    // userBio: {
    //     type: String,
    //     trim: true,
    //     maxlength: 500
    // },

    // jobsWorked: {
    //     type: Number
    // },

    // creditCard: {
    //     type: Number,
    //     required: true,
    //     unique: true,
    // },

    // services: {

    //     // 30, 60, 90 and 2 hour style service card information

    // },

    // speciality: {

    //     // type of photography or service that they specialize in 

    // },

    // photos of work

    // videos of work
})

// // set up pre-save middleware to create password
// userSchema.pre('save', async function (next) {
//     if (this.isNew || this.isModified('password')) {
//         const saltRounds = 10;
//         this.password = await bcrypt.hash(this.password, saltRounds);
//     }

//     next();
// });

// // compare the incoming password with the hashed password
// userSchema.methods.isCorrectPassword = async function (password) {
//     return bcrypt.compare(password, this.password);
// };


const User = model('User', userSchema)

module.exports = User