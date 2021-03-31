const mongoose = require("mongoose");

// Basic setup of the Mongoose Schema
const PetSchema = new mongoose.Schema({
    Name: {
        type: String,
        required:[true,"Min length of 3"],
        minlength: [3,"Setup has to be more than 2 characters"],
        unique: [true, "Name already exists in the database"]
    },
    Type:{
        type: String,
        required:[true, "Minlegth of 3"],
        minlength: [3, "minlength of 3 characters"]
    },
    Description: { 
        type: String,
        required: [true, "Needs content!"],
        minlength:[3, "Minlength of 3 characters"]
    },
    Skills: {
        type: String
    }
} )

// This is how we register our schema.
const Pet = mongoose.model("Pet",PetSchema);

// Finally we export it out of the file.
module.exports = Pet;