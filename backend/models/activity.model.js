const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  title: { 
    type: String,
    required: true 
 },
  description: { 
    type: String
 },
  location: { type: String,
     required: true
     },
  date: { type: Date,
     required: true
     },
  time: { type: String,
     required: true },

  organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model("activity", activitySchema);
