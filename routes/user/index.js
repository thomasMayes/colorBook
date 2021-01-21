var express = require('express');
var router = express.Router();
const userController = require('../../controller/userController');


router.route('/')
.get( userController.user)

router.route('/updatename')
.post(userController.updatename)

router.route('/updateemail')
.post(userController.updateemail)

router.route('/updatepassword')
.post(userController.updatepassword)

router.route('/currentartist')
.post(userController.currentartist)


module.exports = router;
