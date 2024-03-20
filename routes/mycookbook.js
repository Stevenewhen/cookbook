const express = require('express');
const router = express.Router();
const myCookbookCtrl = require('../controllers/myCookbook');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, myCookbookCtrl.myCookbook);

module.exports = router;
