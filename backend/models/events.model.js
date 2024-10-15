//
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// events.model.js

const eventSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: true,
    },
    discipline: {
        type: String,
        required: true,
    },
    date: {
        type: String, 
        required: true
    },
    horaire: { 
        type: String, 
        required: true 
    },
    lieu: {
        type: String,
        required: true,
    },
});

const eventsModel = mongoose.model("events", eventSchema);

module.exports = eventsModel;
