const mongoose = require('mongoose');

async function connect(){
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect('mongodb://127.0.0.1/moto-bike');
        console.log("Connected database")
    } catch (error) {
        handleError(error);
    }
    
}

module.exports={connect}