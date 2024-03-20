var express = require('express');
var router = express.Router();
var recipesCtrl = require('../controllers/recipes');
var myCookbookCtrl = require('../controllers/mycookbook')
var ensureLoggedIn = require('../config/ensureLoggedIn')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });



router.get('/mycookbook', ensureLoggedIn, myCookbookCtrl.myCookbook);


// Get /recipes
router.get('/', recipesCtrl.index);

// GET route to /recipes/new (define this before the route for /:id)
router.get('/new', ensureLoggedIn, recipesCtrl.new);

// Post route to /recipes
router.post('/', ensureLoggedIn, recipesCtrl.create);

// GET route to /recipes *WE WANT TO EDIT
router.get('/:id/edit', ensureLoggedIn, recipesCtrl.edit);


// PUT route to /recipes/:id *WE WANT TO UPDATE
router.put('/:id', ensureLoggedIn, recipesCtrl.update)

// GET route to /recipes/:id
router.delete('/:id', ensureLoggedIn, recipesCtrl.delete)

// GET /recipe/:id
router.get('/:id', recipesCtrl.show);

module.exports = router;
