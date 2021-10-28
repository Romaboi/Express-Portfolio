/* 
File name: book.js
Student Name: Roman Gagarin
Student #: 300866285
Date: October 18th, 2021
*/

let mongoose = require('mongoose');

// create a model class
let bookModel = mongoose.Schema({
    name: String, 
    phone: String,
    email: String,
},
{
    collection: "business_contacts"
});

module.exports = mongoose.model('Book', bookModel);