const mongoose = require('mongoose')
var bcrypt = require('bcryptjs');



const UserSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true
    },
    email: { 
        type: String,
        required: true
    },
    password: { 
        type: String,
        required: true
    },
    pic: {type: String,
        default: "/img/uploads/default.png"
        },
    

})


 UserSchema.methods.comparePassword = function (passw, cb) {
  bcrypt.compare(passw, this.password, function (err, isMatch) {
  if (err) {
  return cb(err);
  }
  cb(null, isMatch);
  });
 };
 







module.exports = mongoose.model('User', UserSchema)
