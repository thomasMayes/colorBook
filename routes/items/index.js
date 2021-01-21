var express = require('express');
var router = express.Router();
var passport = require('passport');
require('../../config/passport')(passport);
const multer = require('multer')
const upload = multer({ dest: './client/public/img/uploads' });
const itemController = require('../../controller/itemController');

router.route('/')
.get( itemController.getItems)
.post( upload.single('myImage'),itemController.addItems)


module.exports = router;
