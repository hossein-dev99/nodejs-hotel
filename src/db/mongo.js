const mongoose = require("mongoose");
const {MONGO_PORT ,MONGO_HOST ,MONGO_DB} = process.env;

mongoose.connection.once("open" ,() => {
    console.log(`MongoDB running successfully...`);
});

const connect = async () => {
    await mongoose.connect(`mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`);
}

exports.run = () => {
    connect().catch(e => {
        console.log(`MongoDB has an error!`);
    })
}