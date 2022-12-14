exports.logout = exports.renderRegister = exports.renderLogin = void 0;
const passport_1 = __importDefault(require("passport"));
const user_1 = __importDefault(require("../models/user.model"));
function renderLogin(req, res, next) {
    passport_1.default.authenticate('local', function (err, user, info) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        if (!user) {
            return res.json({ success: false, message: 'Error: Authentication Failed' });
        }
        req.login(user, function (err) {
            if (err) {
                console.error(err);
                res.end(err);
            }
            return res.json({
                success: true, message: 'User logged in successfully!', user: {
                    id: user._id,
                    email: user.email,
                    username: user.username,
                    password: user.password
                }
            });
        });
        return;
    })(req, res, next);
}
exports.renderLogin = renderLogin;

function renderRegister(req, res, next) {
    let newUser = new user_1.default({
      fistName: user.fistName,
      lastName: user.lastName,
      email: user.email,
      username: user.username,
      password: user.password,
      confirmPassword: user.confirmPassword
    });
    user_1.default.register(newUser, req.body.password, function (err) {
        if (err) {
            if (err.name == "UserExistsError") {
                console.error('Error: User Already Exists!');
            }
            else {
                console.error(err.name);
            }
            return res.json({ success: false, message: 'Error: Registration failed!' });
        }
        return res.json({ success: true, message: 'User registered successfully!' });
    });
}
exports.renderRegister = renderRegister;

function logout(req, res, next) {
    req.logOut(function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        console.log("User has logged out.");
    });
    res.json({ success: true, message: 'User logged out successfully!' });
}
exports.logout = logout;

// let User = require('../models/user.model');
// let passport = require('passport');

// function getErrorMessage(err) {
//   console.log("===> Error: " + err);
//   let message = '';

//   if (err.code) {
//     switch (err.code) {
//       case 11000:
//       case 11001:
//         message = 'Username already exists';
//         break;
//       default:
//         message = 'Something went wrong';
//     }
//   } else {
//     for (var errName in err.errors) {
//       if (err.errors[errName].message) message = err.errors[errName].message;
//     }
//   }

//   return message;
// };

// module.exports.renderLogin = function(req, res, next) {
//   if (!req.user) {
//     res.render('auth/login', {
//       title: 'Login',
//       messages: req.flash('error') || req.flash('info')
//     });

//   } else {
//     console.log(req.user);
//     return res.redirect('/');
//   }
// };

// module.exports.renderRegister = function(req, res, next) {
//   if (!req.user) {

//     // creates a empty new user object.
//     let newUser = User();

//     res.render('auth/register', {
//       title: 'Registration',
//       messages: req.flash('error'),
//       user: newUser
//     });

//     return res.redirect('/');

//   } else {
//     console.log('Error creating new user:', error);

//       return res.status(400).json(
//         {
//           success: false, 
//           message: error.message
//         }
//       );
//   }
// };

// module.exports.register = function(req, res, next) {
//   if (!req.user && req.body.password === req.body.password_confirm) {
//     console.log(req.body);

//     let user = new User(req.body);
//     user.provider = 'local';
//     console.log(user);

//     user.save((err) => {
//       if (err) {
//         let message = getErrorMessage(err);

//         req.flash('error', message);
//         return res.render('auth/register', {
//           title: 'Register Form',
//           messages: req.flash('error'),
//           user: user
//         });
//       }
//       req.login(user, (err) => {
//         if (err) return next(err);
//         return res.redirect('/');
//       });
//     });
//   } else {
//     return res.redirect('/');
//   }
    
// };

// module.exports.logout = function(req, res, next) {
  
//   req.logout(function(err) {
//     if (err) {
//       return next(err);
//     }
//     res.redirect('/');
//   });
// };

// module.exports.login = function(req, res, next){
//   passport.authenticate('local', {   
//     successRedirect: req.session.url || '/',
//     failureRedirect: '/users/login',
//     failureFlash: true
//   })(req, res, next);
//   delete req.session.url;
// }