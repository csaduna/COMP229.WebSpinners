var express = require('express');
var router = express.Router();
let userController = require('../controllers/user.controller');


/* Get Login view */
router.get('/',userController.renderLogin);

router.get('/login', userController.renderLogin);
router.post('/login', userController.login);

router.get('/register', userController.renderRegister);
router.post('/register', userController.register);

router.get('/logout', userController.logout);
module.exports = router;
