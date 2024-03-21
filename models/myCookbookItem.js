const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const myCookbookItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    recipe: {
        type: Schema.Types.ObjectId,
        ref: 'Recipe'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

const MyCookbookItem = mongoose.model('MyCookbookItem', myCookbookItemSchema);

module.exports = MyCookbookItem;
