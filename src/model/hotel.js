const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
    name:{type: String ,required: true},
    slug:{type: String ,required: true},
    address:{type: String ,required: true},
    rate:{type: String ,required: true},
    images_url:{type: Object ,required: true},
    price:{type: String ,required: true},
    about:{type: String ,required: true},
    facilities:{type: Array ,required: true},
    near_places:{type: Array , required: true}
})

module.exports = mongoose.model("Hotel" ,hotelSchema);