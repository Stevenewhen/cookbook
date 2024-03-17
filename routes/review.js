var express = require('express');
var router = express.Router();
var recipesCtrl = require('../controllers/recipes');
var ensureLoggedIn = require('../config/ensureLoggedIn')


router.post('/recipes/:id/reviews', ensureLoggedIn, reviewsCtrl.create);

router.delete('/recipes/:id', ensureLoggedIn, reviewsCtrl.delete);

module.exports = router;