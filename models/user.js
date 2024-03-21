const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: String,
  userAvatar: String,
  date: {
    type: Date,
    default: Date.now
  },
  cookbook: [{ type: Schema.Types.ObjectId, ref: 'Recipe' }]
});

module.exports = mongoose.model('User', userSchema);
