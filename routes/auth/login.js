
var express = require("express");
var router = express.Router();
const authController = require('../../controller/authController');

router.route('/')
.post(authController.login);

module.exports = router;
