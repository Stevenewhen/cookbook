const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    category: {
        type: String,
        required: true,
        enum: ['American', 'Chinese', 'French', 'German', 'Greek', 'Indian', 'Italian', 'Japanese', 'Mexican', 'Spanish', 'Thai', 'Vietnamese']
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
    }, {
  timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema);
