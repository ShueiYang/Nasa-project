
const mongoose = require("mongoose");

mongoose.connection.once('open', () => {
    console.log("MongoDB connection ready!");
});
mongoose.connection.on('error', (err) => {
    console.error(err);
});

async function mongoConnect() {
    try {
        await mongoose.connect(`mongodb${process.env.DATABASE_ACCESS}`)  
        
    } catch (err) {
        console.log(err)
    }
}; 

async function mongoDisconnect() {
    await mongoose.disconnect();  
};

module.exports = {
    mongoConnect,
    mongoDisconnect
};