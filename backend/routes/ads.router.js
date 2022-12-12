var express = require('express');
var router = express.Router();
let adsController = require('../controllers/ads.controller');

//setting up authentication
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        req.session.url = req.originalUrl;
        return res.redirect('/users/login');
    }
    next();
}

/* GET users listing. */
router.get('/list', adsController.adsList);


// Routers for edit
router.get('/edit/:id', requireAuth, adsController.displayEditPage);
router.post('/edit/:id', requireAuth, adsController.processEditPage);


/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, adsController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', requireAuth, adsController.processAddPage);


// Route for Delete
router.get('/delete/:id', requireAuth, adsController.performDelete);

// Route for Questions
//router.get('/qa/:id', adsController.qaList);

module.exports = router;
