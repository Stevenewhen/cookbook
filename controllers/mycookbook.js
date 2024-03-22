const MyCookbookItem = require('../models/myCookbookItem');
const Recipe = require('../models/recipe');

module.exports = {
    add: addItemToMyCookbook,
    getAll: getAllMyCookbookItems,
    delete: deleteMyCookbookItem,
    // index,
};


async function addItemToMyCookbook(req, res) {
    try {
        const { recipeId } = req.body;
        const recipe = await Recipe.findById(recipeId);
        const newItem = new MyCookbookItem({
            name: recipe.name,
            description: recipe.description,
            image: recipe.image,
            recipe: recipe._id
        });
        const savedItem = await newItem.save();
        const items = await MyCookbookItem.find();
        res.render('mycookbook/index', { mycookbook: items, title: 'MyCookbook' });
    } catch (error) {
        console.error(error);
    }
}

async function getAllMyCookbookItems(req, res) {
    console.log("My name is", req.user.name)
    try {
        const user = req.user;
        const items = await MyCookbookItem.find().populate('user')
        res.render('mycookbook/index', { mycookbook: items, title: 'MyCookbook' });
    } catch (error) {
        console.error(error);
    }
}

async function deleteMyCookbookItem(req, res) {
    const { id } = req.params;
    try {
        const deletedItem = await MyCookbookItem.findByIdAndDelete(id);
        res.redirect('/mycookbook');
    } catch (error) {
        console.error(error);
    }
}


