const { ServerDescription } = require('mongodb')
const mongoose = require('mongoose')

const RoomSchema = new mongoose.Schema({
 name:{
        type: String,
    require: true
    },
    maxcount:{
        type: Number,
        require: true
    },
    phonenumber:{
        type: Number,
        require: true
    },
    rentperday:{
        type: Number,
        require: true
    },
    
    description: {
        type : String,
        require : true
    }
    
},
)
module.exports = Room = mongoose.model('Rooms',RoomSchema);