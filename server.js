let inventory = require('./inventory')
let devUsers = require('./javascript/devUsers')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Item = require('./models/items.js')
const User = require('./models/user.js')

let helmet = require('helmet')
app.use(helmet())
app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }));
app.use(helmet.frameguard({action: 'deny'}));
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.dnsPrefetchControl());

const cors = require('cors')
const mongoose = require('mongoose')
// var dashboardRoutes= require('./routes/dashboard')
// var auth = require('./routes/auth');
//  const pokerRoutes = require('./routes/poker');
//  const itemRoutes = require('./routes/items')

 const routes = require('./routes/index');


 mongoose.connect(process.env.MLAB_URI || 'mongodb://localhost/capstone',{ useNewUrlParser: true , useUnifiedTopology: true })
 .then(()=> console.log('database is Connected!!!!'))
 .catch(err=> console.log(err))
   



 app.use(cors())
// app.use(bodyParser.urlencoded({ extended: false }))
 app.use(bodyParser.json())
 app.use(routes);
//  app.use('/api/dashboard', dashboardRoutes) 
//  app.use('/api/auth', auth)
//  app.use('/api/poker', pokerRoutes)
//  app.use('/api/items', itemRoutes)
 
User.find((err, data)=>{
if(err)console.log(err)

  if(data.length === 0){
devUsers.forEach((user, i)=>{
  let newUser = new User(user)
  newUser.save().then(result=>{
inventory[i].forEach(item=>{
  let newItem = new Item(item)
  newItem.userId = result._id
  newItem.save()
})

  })
})
 
 } 
})



// inventory.forEach(item=>{
 
//  let newItem = new Item(item)
// newItem.save()
// })



const listener = app.listen(process.env.PORT || 8080, () => {
  console.log('The Server is listening on port ' + listener.address().port)
})
 