const mongoose = require('mongoose')

const WinDataSchema= new mongoose.Schema({
    player: { 
        type: String,
    },
    playerId:{
        type: String
    },
    winningHand: { 
        type: String
    },
    win: { 
        type: Boolean
    },
    winAmount: { 
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model('WinData', WinDataSchema)