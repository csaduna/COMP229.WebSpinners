var express = require('express');
var router = express.Router();
let adsController = require('../controllers/ads.controller');

/* GET users listing. */
router.get('/list', adsController.adsList);


// Routers for edit
router.get('/edit/:id', adsController.displayEditPage);
router.post('/edit/:id', adsController.processEditPage);


/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', adsController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', adsController.processAddPage);


// Route for Delete
router.get('/delete/:id', adsController.performDelete);


module.exports = router;
