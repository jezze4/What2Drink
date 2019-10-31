const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String, // Soda or Alcohol
    default: "Soda"
  }
});

module.exports = Item = mongoose.model('item', ItemSchema);
