let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

// Connect to our Book model (Schema)
// Being done on the logic side
/* 
File name: book.js
Student Name: Roman Gagarin
Student #: 300866285
Date: October 18th, 2021
*/

// let Book = require('../models/book');

let bookController = require('../controllers/book');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the Book List page - Read Operation */
router.get('/', requireAuth, bookController.displayBookList);

/* GET Route for displaying Add page - Create Operation */
router.get('/add', requireAuth, bookController.displayAddPage);

/* POST Route for processing Add page - Create Operation */
router.post('/add', requireAuth, bookController.processAddPage);

/* GET Route for displaying Edit page - UPDATE Operation */
router.get('/edit/:id', requireAuth, bookController.displayEditPage);

/* POST Route for processing Edit page - UPDATE Operation */
router.post('/edit/:id', requireAuth, bookController.processEditPage);

/* GET Route for perform Book Deletion - DELETE Operation */
router.get('/delete/:id', requireAuth, bookController.performDelete);


module.exports = router;