/* 
File name: users.js
Student Name: Roman Gagarin
Student #: 300866285
Date: October 18th, 2021
*/

let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('placeholder');
});

module.exports = router;
