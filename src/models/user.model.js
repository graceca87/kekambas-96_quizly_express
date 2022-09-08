const mongoose = require('mongoose');

// Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [
                // below is regex in javascript for a valid email address
                /^\w+([\.-]?\w+)*@\w+([\.-]?)*(\.\w{2,3})+$/,
                // if it doesn't match that the user will see the following message:
                'Please enter a valid email'
            ]
        },
        password: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

// below we are naming the model user and exporting this module
module.exports = mongoose.model("user", userSchema);
