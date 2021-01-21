const mongoose = require('mongoose')
var bcrypt = require('bcryptjs');



const ItemSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true
    },
    description: { 
        type: String
    },
    price: { 
        type: String
    },
    userId: { 
        type: String
    },
    image: {
        type: String,
        default: './img/popsicle.jpg'
    },
    color: {
        type: String,
        default: 'white'
    },
    aspect: {
        type: String
    }

    

  
})










module.exports = mongoose.model('Item', ItemSchema)
