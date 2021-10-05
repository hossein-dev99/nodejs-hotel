const mongoose = require("mongoose");
const {MONGO_PORT ,MONGO_HOST ,MONGO_DB ,MONGO_USER ,MONGO_PASS} = process.env;

mongoose.connection.once("open" ,() => {
    console.log(`MongoDB running successfully...`);
});

const connect = async () => {
    await mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASS}@hotel-cluster.vdcvr.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`);
}

exports.run = () => {
    connect().catch(e => {
        console.log("MongoDb has an error: ");
        console.log(e);
    })
}