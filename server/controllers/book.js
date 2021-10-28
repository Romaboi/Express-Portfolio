/* 
File name: book.js
Student Name: Roman Gagarin
Student #: 300866285
Date: October 18th, 2021
*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the db schema (or model)
let Book = require('../models/book');

module.exports.displayBookList = (req, res, next) => {
    Book.find((err, BookList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(BookList);

            res.render('book/list', {title: 'Books', Booklist: BookList, displayName: req.user ? req.user.displayName : ''});
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('book/add', {title: 'Add Book', displayName: req.user ? req.user.displayName : ''});
}

module.exports.processAddPage = (req, res, next) => {
    let newBook = Book({
        "name": req.body.name,
        "phone": req.body.phone,
        "email": req.body.email,
    });

    Book.create(newBook, (err, Book) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else{
            // refresh the book list
            res.redirect('/book-list');
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Book.findById(id, (err, bookToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //Show the edit view
            res.render('book/edit', {title: "Edit Book", book: bookToEdit, displayName: req.user ? req.user.displayName : ''});
        }
    })
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    let updatedBook = Book({
        "_id": id,
        "name": req.body.name,
        "phone": req.body.phone,
        "email": req.body.email
    })

    Book.updateOne({_id: id}, updatedBook, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/book-list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Book.remove({_id: id}, (err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/book-list');
        }
    })
}
