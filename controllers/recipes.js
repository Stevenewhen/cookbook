const Recipe = require('../models/recipe');

module.exports = {
    new: newRecipe,
    create,
    index,
    show
};

async function show(req, res) {
    try {
        const recipe = await Recipe.findById(req.params.id);
        res.render('recipes/show', { recipe });
    } catch (err) {
        console.error(err);

    }
}

async function index(req, res) {
    const recipes = await Recipe.find({})
    res.render('recipes/index', { recipes })
}

async function create(req, res) {
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
    res.render('recipes/new', {errorMsg: ''});
}

