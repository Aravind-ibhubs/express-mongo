const mongoose = require("mongoose");

const dataScheme = new mongoose.Schema({
    task : {
        required : true,
        type: String
    },
    score : {
        required : true,
        type : Number
    }
})

module.exports = mongoose.model("Data", dataScheme);
