const mongoose = require('mongoose');
const config = require('config');

const db = "mongodb+srv://ipsitak938:b1y1jpkSJRZtHAfI@cluster0.kysfl9p.mongodb.net/?retryWrites=true&w=majority"
const connectDB = async () => {

    try{
        mongoose.set("strictQuery" , true)
        await mongoose.connect(db, {
            useNewUrlParser: true,
        })
    }
catch (err){
    console.error(err.message);
    process.exit(1)
}
}

module.exports = connectDB;
