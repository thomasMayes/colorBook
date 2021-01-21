var passport = require("passport");
require("../config/passport")(passport);
var jwt = require("jsonwebtoken");
var settings = require("../config/settings");
let authFunctions = require("../javascript/authFunctions");
const User = require("../models/user.js");
const Item = require("../models/items.js");
var bcrypt = require("bcryptjs");

module.exports = {
  user:
    (passport.authenticate("jwt", { session: false }),
    async (req, res) => {
      let token = await authFunctions.getToken(req.headers);
      let decoded = jwt.verify(token, settings.secret);
      if (token) {
        res.json(decoded);
      } else {
        return res.status(403).send({ success: false, msg: "Unauthorized." });
      }
    }),
  updatename:
    (passport.authenticate("jwt", { session: false }),
    async (req, res) => {
      console.log(req.body.name);

      if (req.body.name === "") {
        res.json({
          success: false,
          msg: { message: "please enter valid username", status: "error" },
        });
      } else {
        let token = await authFunctions.getToken(req.headers);
        let decoded = jwt.verify(token, settings.secret);

        console.log(decoded)
        User.findById(decoded._id, (err, data) => {
          if (data.name === req.body.name) {
            res.json({
              success: false,
              msg: {
                message: "this is already your username dumbass...",
                status: "error",
              },
            });
          } else {
            data.name = req.body.name;
            data.save().then((result) => {
                var token = jwt.sign(result.toJSON(), settings.secret)



              res.json({
                success: true,
                msg: {
                  message: "username successfully updated",
                  status: "success",
                },
                user: result,
                token: "JWT " + token
              });
            });
          }
        });
      }
    }),
    updatepassword: (passport.authenticate("jwt", { session: false }),
    async (req, res) => {
      const TestRegex = /(?=.*\d)(?=.*[a-z])(?=.*[!|#|$|%|&]).{6,}/gi;
      let regTest =TestRegex.test(req.body.newPassword)
      if (req.body.newPassword === "" || req.body.currentPassword === '') {
        res.json({
          success: false,
          msg: { message: "please enter valid current password & valid new password", status: "error" },
        });
      } else if(!regTest){
        res.json({
          success: false,
          msg: { message: "Password must contain 6 characters including at least one number and one symbol", status: "error" },
        });

      } else {
        let token = await authFunctions.getToken(req.headers);
        let decoded = jwt.verify(token, settings.secret);

        console.log(decoded)


        await bcrypt.genSalt(10, (err, salt) =>
        bcrypt.hash(req.body.newPassword, salt, (err, hash) => {
          if (err) throw err; 

User.findById(decoded._id, (err, data) => {
    data.comparePassword(req.body.currentPassword, (err, isMatch) =>{
        if (isMatch && !err) {
         data.password = hash;
            data.save().then((result) => {
                var token = jwt.sign(result.toJSON(), settings.secret)



              res.json({
                success: true,
                msg: {
                  message: "password successfully updated",
                  status: "success",
                },
                user: result,
                token: "JWT " + token
              });
            });


          } else {
            res
              .status(401)
              .send({
                success: false,
                msg: {
                    message: "current password is invalid",
                    status: "error",
                  },
              });
          }


    }) 

      
            
        //   }
        });



         
        }))

        
      }
    }),

    updateemail: (passport.authenticate("jwt", { session: false }),
    async (req, res) => {

      if (req.body.email === "") {
        res.json({
          success: false,
          msg: { message: "please enter valid email", status: "error" },
        });
      } else {
        let token = await authFunctions.getToken(req.headers);
        let decoded = jwt.verify(token, settings.secret);

        User.findById(decoded._id, (err, data) => {
          if (data.email === req.body.email) {
            res.json({
              success: false,
              msg: {
                message: "this is already your email dumbass...",
                status: "error",
              },
            });
          } else {
            data.email = req.body.email;
            data.save().then((result) => {
                var token = jwt.sign(result.toJSON(), settings.secret)



              res.json({
                success: true,
                msg: {
                  message: "email successfully updated",
                  status: "success",
                },
                user: result,
                token: "JWT " + token
              });
            });
          }
        });
      }
    }),
    currentartist: (passport.authenticate("jwt", { session: false }),
    async (req, res) => {

      let artistId = req.body.id
      if(artistId){



      

      User.findById(artistId, (err, data)=>{
let {name, email} = data

Item.find().then(items=>{
  let currentItems= items.filter(x=>x.userId === artistId)

let result = {
name,
email,
items: currentItems

}

res.json({
  success: true, 
  artist: result
});





})




      })

}

      
    })

}
