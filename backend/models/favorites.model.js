const mongoose = require('mongoose');

const favoritesSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId,
     ref: 'user', required: true 
    },
  activity: { 
     type: mongoose.Schema.Types.ObjectId,
     ref: 'activity', required: true }
});

module.exports = mongoose.model('favorites', favoritesSchema);
