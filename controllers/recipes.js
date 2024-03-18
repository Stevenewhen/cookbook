const Recipe = require('../models/recipe');

module.exports = {
    new: newRecipe,
    create,
    index,
    show,
    delete: deleteRecipe
};

async function deleteRecipe(req, res) {
    try {
        await Recipe.findByIdAndDelete(req.params.id);
        res.redirect('/recipes');
    } catch (err) {
        console.error(err);
        res.redirect('/recipes'); // Redirect to recipe list page on error
    }
}



async function show(req, res) {
    try {
        const recipe = await Recipe.findById(req.params.id);
        res.render('recipes/show', { recipe, title: 'Recipe' });
    } catch (err) {
        console.error(err);
    }
}

async function index(req, res) {
    const recipes = await Recipe.find({})
    res.render('recipes/index', { 
        recipes,
        title: 'Recipe List' })
}

async function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    try {
        await Recipe.create(req.body);
        res.redirect('/recipes');
    } catch (err) {
        console.error(err);
        res.render('recipes/new', {
            errorMsg: err.message
        });
    }
}

function newRecipe(req, res) {
    const newRecipe = new Recipe();
    console.log(newRecipe)
    res.render('recipes/new', {errorMsg: '', title: 'Add Recipe'});
}

