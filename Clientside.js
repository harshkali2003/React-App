const mongoose = require('mongoose');

const StayOnTrack = new mongoose.Schema({
    name:String,
    email:String,
    password:String
});

module.exports = mongoose.model("UserData",StayOnTrack);