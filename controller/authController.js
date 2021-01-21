var jwt = require("jsonwebtoken");
var settings = require("../config/settings");
var passport = require("passport");
require("../config/passport")(passport);
var bcrypt = require("bcryptjs");
//user Model
const User = require("../models/user.js");

module.exports = {
  login: (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
      if (err) throw err;
      if (!user) {
        res.status(401).send({
          success: false,
          msg: {
            message:"Authentication failed. User not found.",
            status: 'error'
          }
        });
      } else {
        // check if password matches
        user.comparePassword(req.body.password, (err, isMatch) => {
          if (isMatch && !err) {
            // create a token
            var token = jwt.sign(user.toJSON(), settings.secret);
            // return the information including token as JSON
            res.json({ user, success: true, token: "JWT " + token });
          } else {
            res.status(401).send({
              success: false,
              msg: {
                message:"Authentication failed. Wrong password.",
                status: 'error'
              } ,
            });
          }
        });
      }
    });
  },
  register: async (req, res) => {
    let { name, email, password } = req.body;
    const TestRegex = /(?=.*\d)(?=.*[a-z])(?=.*[!|#|$|%|&]).{6,}/gi;
    if (!req.body.name || !req.body.password) {
      res.json({ success: false, msg: "Please pass username and password." });
    } else {
      
      let regTest =TestRegex.test(password)
     
      if (regTest) {
       

        var newUser = new User({
          name,
          password,
          email,
        });
        await bcrypt.genSalt(10, (err, salt) =>
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;

            newUser.save(function (err) {
              if (err) {
                console.log(err);
                return res.json({
                  success: false,
                  msg: {
                    message: "Email already taken.",
                    status: 'error'
                  },
                });
              }
              res.json({ success: true, msg: "Successful created new user." });
            });
          })
        );
      } else {
        
        res.json({
          success: false,
          msg: {
            message:"Password must contain 6 characters including at least one number and one symbol" ,
            status: 'error'
          }
            
        });
      }
    }
  },
};
