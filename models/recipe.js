const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    userName: String,
    userAvatar: String,
    date: {
      type: Date,
      default: Date.now
    },
  }, {
    timestamps: true
  });



const recipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    image: {
      type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    category: {
        type: String,
        required: true,
        enum: ['American', 'Chinese', 'French', 'German', 'Greek', 'Indian', 'Italian', 'Japanese', 'Korean', 'Mexican', 'Spanish', 'Thai', 'Vietnamese']
    },
    description: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    directions: {
        type: String,
        required: true
    },
    prepTime: {
        type: Number,
        required: true
    },
    cookTime: {
        type: Number,
        required: true
    },
    reviews: [reviewSchema]
    }, {
  timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema);
