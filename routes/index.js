var express = require('express');
var router = express.Router();
const passport = require('passport')
var ensureLoggedIn = require('../config/ensureLoggedIn')



/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/recipes');
});


// GOOGLE OAuth loging route
router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
    prompt: "select_account"
  }
));

// GOOGLE OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/recipes',
    failureRedirect: '/recipes'
  }
));

// GOOGLE OAuth logout route
router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/recipes');
  });
});


module.exports = router;
