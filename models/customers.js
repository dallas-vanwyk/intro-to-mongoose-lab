// customers.js

// mongoose dependency
const mongoose = require('mongoose');

// define the customer schema
const customerSchema = new mongoose.Schema({
    name: String,
    age: Number,
})
