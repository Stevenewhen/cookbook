var express = require('express');
var router = express.Router();
var recipesCtrl = require('../controllers/recipes');
var ensureLoggedIn = require('../config/ensureLoggedIn')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.delete('/:id', ensureLoggedIn, recipesCtrl.delete)


// Get /recipes
router.get('/', recipesCtrl.index);

// GET route to /recipes/new (define this before the route for /:id)
router.get('/new', ensureLoggedIn, recipesCtrl.new);

// GET /recipe/:id
router.get('/:id', recipesCtrl.show);

// Post route to /recipes
router.post('/', ensureLoggedIn, recipesCtrl.create);



module.exports = router;
