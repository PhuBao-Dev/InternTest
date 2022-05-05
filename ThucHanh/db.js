const mongoose = require('mongoose')

async function connect(){
    try {
        await mongoose.connect('mongodb+srv://impbpb:6LEhnBfTY6LCfOSU@pbcluster.46aet.mongodb.net/InternTest');
        console.log("Successfully Connected");
    } catch (error) {
        console.log("Failure Connected!!!!");
        
    }
}

module.exports = {connect}