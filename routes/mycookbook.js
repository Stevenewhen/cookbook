const express = require('express');
const router = express.Router();
const myCookbookCtrl = require('../controllers/mycookbook');



router.post('/', myCookbookCtrl.add);


router.get('/', myCookbookCtrl.getAll);


router.get('/index', myCookbookCtrl.index);


router.delete('/:id', myCookbookCtrl.delete);


module.exports = router;
