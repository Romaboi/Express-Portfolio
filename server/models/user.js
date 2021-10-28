/* 
File name: user.js
Student Name: Roman Gagarin
Student #: 300866285
Date: October 18th, 2021
*/

// require modules for the User Model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema
(
    {
        username:
        {
            type: String,
            default: '',
            trime: true,
            required: 'Username is required'
        },
        /*
        password:
        {
            type: String,
            default: '',
            trim: true,
            required: 'password is required'
        }
        */
       email:
       {
            type: String,
            default: '',
            trime: true,
            required: 'Email is required'
       },
       displayName:
       {
            type: String,
            default: '',
            trime: true,
            required: 'Display Name is required'
       },
       created:
       {
            type: Date,
            default: Date.now
       },
       update:
       {
            type: Date,
            default: Date.now
       }
    },
    {
        collection: "users"
    }
)

// configure options for User Model

let options = ({missingPasswordError: 'Wrong / Missing Password'});

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User);