const mongoose = require('mongoose')

const WinDataByDateSchema= new mongoose.Schema({
  
    date: {
        type: String
        
        
    },
    winData: [Object]

})

module.exports = mongoose.model('WinDataByDate', WinDataByDateSchema)