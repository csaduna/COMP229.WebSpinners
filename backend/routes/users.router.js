var express = require('express');
var router = express.Router();
let userController = require('../controllers/user.controller');

/* GET users listing. */
router.get('/', function(req, res, next) {  
    res.render('users', { 
      title: 'Users',
      userName: req.user ? req.user.username : ''
    });
  });

/* Get Login view */
router.get('/',userController.renderLogin);

router.post('/login', userController.renderLogin);

router.post('/register', userController.renderRegister);

router.get('/logout', userController.logout);
module.exports = router;
