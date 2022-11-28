let User = require('../models/user.model');
let passport = require('passport');

function getErrorMessage(err) {
  console.log("===> Error: " + err);
  let message = '';

  if (err.code) {
    switch (err.code) {
      case 11000:
      case 11001:
        message = 'Username already exists';
        break;
      default:
        message = 'Something went wrong';
    }
  } else {
    for (var errName in err.errors) {
      if (err.errors[errName].message) message = err.errors[errName].message;
    }
  }

  return message;
};

module.exports.renderLogin = function(req, res, next) {
  if (!req.user) {
    res.render('auth/login', {
      title: 'Login',
      messages: req.flash('error') || req.flash('info')
    });
  } else {
    console.log(req.user);
    return res.redirect('/');
  }
};

module.exports.renderRegister = function(req, res, next) {
  if (!req.user) {

    // creates a empty new user object.
    let newUser = User();

    res.render('auth/register', {
      title: 'Registration',
      messages: req.flash('error'),
      user: newUser
    });

  } else {
    return res.redirect('/');
  }
};

module.exports.register = function(req, res, next) {
  if (!req.user && req.body.password === req.body.password_confirm) {
    console.log(req.body);

    let user = new User(req.body);
    user.provider = 'local';
    console.log(user);

    user.save((err) => {
      if (err) {
        let message = getErrorMessage(err);

        req.flash('error', message);
        return res.render('auth/login', {
          title: 'Login',
          messages: req.flash('error'),
          user: user
        });
      } else {
        return res.redirect('/');
      }
    });
    req.login(user, (err) => {
        if (err) return next(err);
        return res.redirect('/');
    });
    
}
};

module.exports.logout = function(req, res, next) {
  
  req.logout(function(err) {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
};

module.exports.login = function(req, res, next){
  passport.authenticate('local', {   
    successRedirect: req.session.url || '/ads/list',
    failureRedirect: '/users/login',
    failureFlash: true
  });
  delete req.session.url;
}