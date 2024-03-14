const Recipe = require('../models/recipe');

module.exports = {
    new: newRecipe,
    create
};

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

