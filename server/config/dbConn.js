const mongoose = require('mongoose')

// mongoDB string to access database online
// mongodb+srv://admin:admin@cluster0.dvs6pai.mongodb.net/?retryWrites=true&w=majority

// To access local mongoDB database
// mongodb://localhost/talent


const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/talent', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    } catch (err) {
        console.log(err)
    }
    console.log('connected to mongoDB')
}

module.exports = connectDB