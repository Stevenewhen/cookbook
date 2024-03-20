const Recipe = require('../models/recipe');

module.exports = {
    myCookbook,
    new: newRecipe,
    create,
    index,
    show,
    delete: deleteRecipe,
    edit,
    update: recipeUpdate,
};

function myCookbook(req, res) {
    res.render('/mycookbook', { errorMsg: '', title: 'myCookbook' });
}


async function edit(req, res) {
    try {
        const recipe = await Recipe.findOne({_id: req.params.id});
        if (!recipe) return res.redirect('/recipes');
        res.render('recipes/edit', {recipe, errorMsg: '', title: 'Edit Recipe'});
    } catch (err) {
        console.error(err);
        res.redirect('/recipes');
    }
}

async function recipeUpdate(req, res) {
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedRecipe) {
            return res.redirect('/recipes');
        }
        res.redirect(`/recipes/${updatedRecipe._id}`);
    } catch (err) {
        console.error(err);
        res.redirect('/recipes');
    }
}


async function deleteRecipe(req, res) {
    try {
        await Recipe.findByIdAndDelete(req.params.id);
        res.redirect('/recipes');
    } catch (err) {
        console.error(err);
        res.redirect('/recipes');
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
    res.render('recipes/new', {errorMsg: '', title: 'Enter a New Recipe'});
}

