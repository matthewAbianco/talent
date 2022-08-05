const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const connectDB = require('./config/dbConn')
const MONGODB = 'mongodb+srv://admin:admin@cluster0.dvs6pai.mongodb.net/?retryWrites=true&w=majority'

const app = express()
const PORT = process.env.PORT || 9000

// connnect to mongoDB 
connectDB()



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.use(require('./routes'));

app.listen(
    PORT, () => console.log(`🌍 Server started on ${PORT}`
    ))

