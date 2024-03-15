var express = require('express');
var router = express.Router();
var recipesCtrl = require('../controllers/recipes');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

//Get /recipes
router.get('/', recipesCtrl.index)

//GET route to /recipes/new
router.get('/new', recipesCtrl.new)

//Post route to /recipes
router.post('/', recipesCtrl.create)



module.exports = router;
