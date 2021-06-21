const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const audioSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    length:{
        type: String,
        required: true
    },
    link:{
        type: String,
        required: true
    }
}, {timestamps: true});


const Audio = mongoose.model("Audio", audioSchema);

module.exports = Audio;

