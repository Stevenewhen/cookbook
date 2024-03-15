const Recipe = require('../models/recipe');

module.exports = {
    new: newRecipe,
    create,
    index
};

async function index(req, res) {
    const recipes = await Recipe.find({})
    res.render('recipes/index', {
        recipes
    })
}

async function create(req, res) {
    Recipe.create(req.body)
    try{
        Recipe.create(req.body);
        res.redirect('/recipes/new')
    } catch (err) {
        console.log(err);
        res.render('recipes/new', { errorMsg: err.message});
    }
}


function newRecipe(req, res) {
    res.render('recipes/new', { errorMsg: ''});
}

