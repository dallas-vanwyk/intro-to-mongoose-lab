// customers.js

// mongoose dependency
const mongoose = require('mongoose');

// define the customer schema
const customerSchema = new mongoose.Schema({
    name: String,
    age: Number,
})

// define the customer model
const Customer = mongoose.model('Customer', customerSchema);
// make sure Customer matches 'Customer' exactly?????
// is the schema that we've defined
// passing it to mongoose.model
// first argument is name - when it interacts with the database, this is what it'll be called
// second argument is the shape of the objects



// export it so it can be used in the other files
module.exports = Customer;
