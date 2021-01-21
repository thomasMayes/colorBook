
var express = require('express');
var router = express.Router();
const loginRoutes = require('./login');
const registerRoutes = require('./register');

 
router.use('/login', loginRoutes);
router.use('/register', registerRoutes);




 module.exports = router;