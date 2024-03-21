const MyCookbookItem = require('../models/myCookbookItem');
const Recipe = require('../models/recipe');

module.exports = {
    add: addItemToMyCookbook,
    getAll: getAllMyCookbookItems,
    delete: deleteMyCookbookItem,
    index,
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


async function index(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    try {
        const items = await MyCookbookItem.find();
        const user = req.user;
        res.render('mycookbook/index', { mycookbook: items, title: 'myCookbook'});
    } catch (error) {
        console.error(error);
    }
}



async function getAllMyCookbookItems(req, res) {
    try {
        const items = await MyCookbookItem.find();
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


