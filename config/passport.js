const passport = require('passport');
const user = require('../models/user.model');

module.exports = function() {
    
    const User = require('../models/user.model');
    
    //serializeing credentials
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    //deserializing credentials
    passport.deserializeUser((id, done) => {
        User.findOne({_id: id}, '-password -salt', (err, user) => {done(err, user);});
    });

    require('./local')();
}

