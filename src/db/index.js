const mongoose = require('mongoose');


const connectDB = async () => {
    // process.env.MONGO_URI - that information is being pulled in here from .env file. hide it bc it contains password
    const connection = await mongoose.connect(process.env.MONGO_URI)
    console.log('MongoDB connected!')
}

module.exports = { connectDB }
