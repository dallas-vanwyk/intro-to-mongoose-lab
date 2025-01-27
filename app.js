// app.js

// --------------------------------------------------- define dependencies...

const prompt = require('prompt-sync')();
// the second () is because you don't want to return the package itself, but instead ... something else? supposedly explained in the package documentation

const dotenv = require('dotenv');
dotenv.config();
// also valid: require('dotenv').config;

const mongoose = require('mongoose');


// A Customer Relationship Management (CRM) tool is an application that allows a company to keep track of their customers
// In this lab. you’re going to create a terminal-based CRM application that will have full CRUD functionality on a single model: Customer.

// Implement a simple menu system that lets the user choose an action (Create, View, Update, Delete, Quit). Use prompt-sync to get the user’s choice and handle it accordingly.
// When figuring out what the user wants to do, it’s probably easiest to prompt them to choose from various options in a numbered list. This way, the user just enters a number and the application knows what to do next.

// When dealing with choosing a specific customer to update or delete, it’s probably easiest to list the customers in the database along with their ids. Then prompt the user to enter id of the user that needs to be updated/deleted.


// -------------------------------------------------- main function

const main = async () => {

    // ---------------------------------------------- functions
    const connect = async () => {
        // connect to mongoDB using the MONGODB_URI specified in our .env file
        await mongoose.connect(process.env.MONGODB_URI);
        // console.log('Connected to MongoDB');
    };


    const disconnect = async () => {
        // Disconnect our app from MongoDB after our queries run.
        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');

        // Close our app, bringing us back to the command line.
        process.exit();
    };

    const actionPrompt = () => {

        console.log(`
        What would you like to do?
        
          1. Create a customer
          2. View all customers
          3. Update a customer
          4. Delete a customer
          5. quit
        
          `);

        let actionChoice = prompt(`Enter the number of the action to run: `);
        console.log(``);
        // console.log(actionChoice);
        actionSelect(actionChoice);
    };



    const actionSelect = (actionChoice) => {
        // this maybe could be done cleaner/DRYer 
        switch (actionChoice) {
            case '1':
                createCustomer();
                break;
            case '2':
                viewAllCustomers();
                break;
            case '3':
                updateCustomer();
                break;
            case '4':
                deleteCustomer();
                break;
            case '5':
                quit();
                break;
            default:
                console.log('please choose an option 1-5')
                actionPrompt();
                break;
        };
    };

    // function 1: create customer
    const createCustomer = () => {
        console.log(`Action 1: create a customer`);
        console.log(``);
        let customerName = prompt(`Enter customer name: `);

        // and here is where the route will go


        // input customer name and other info
        // add to database
        // print a confirmation

    };

    // function 2: view all customers
    const viewAllCustomers = () => {
        console.log(`Action 2: view all customers`);
        console.log(``);

        // retrieve all customers from mongoDB
        // print to console

    };

    // function 3: update a customer
    const updateCustomer = () => {
        console.log(`Action 3: update a customer`);
        console.log(``);

        // pick customer from the database
        // update hte info
        // print confirmation of customer updat to teh console

    };

    // function 4: delete a customer
    const deleteCustomer = () => {
        console.log(`Action 4: delete a customer`);
        console.log(``);

        // access customer in mongoDB
        // delete customer
        // print confirmation that customer has been deleted

    };

    // function 5: quit
    const quit = async () => {
        console.log(`Action 5: quit`);

        // disconnect from database
        disconnect();
    };

    // ---------------------------------------------------- code to run

    // connect to database
    await connect();

    // Start by displaying a welcome message to the user
    const username = prompt('What is your name? ');
    console.log(`Welcome to the CRM application, ${username}\n`);

    let actionChoice = '';
    actionPrompt();



    // disconnect from database
    await disconnect();
};



// ------------------------------------------ functions to run on file run

main();

