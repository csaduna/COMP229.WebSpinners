
let mongoose = require('mongoose');
let crypto = require('crypto');

//Creates a Model Class:

let userSchema = mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        email: {
            type: String,
            match: [/.+\@.+\..+/, "Please enter a valid email address"]
        },
        username: {
            type: String,
            unique: true,
            required: 'The username is required',
            trim: true
        },
        password: {
            type: String,
            validate: [(password) => {
                return password && password.length > 6;
            }, 'The password should be at least 7 characters']
        },
        salt: String,
        created: {
            type: Date,
            default: Date.now
        }
    }, 
    {
        collection: "user"
    }
);

userSchema.virtual('fullName')
    .get(function(){
        return this.firstName + ' ' + this.lastName;
    })
    .set(function(fullName){
        let splitName = fullName.split(' ');
        this.firstName = splitName[0] || '';
        this.lastName = splitName[1] || '';
});

// Middleware Pre
userSchema.pre('save', function(next){
    if (this.password){
        this.salt = Buffer.from(crypto.randomBytes(16).toString('base64'), 'base64');
        this.password = this.hashPassword(this.password);
    }
    next();
});

// Middleware Post
userSchema.post('save', function(next){
    console.log('The user "' + this.username + '" details were saved successfully.');
});

userSchema.methods.hashPassword = function(password){
    return crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('base64');
}

userSchema.methods.authenticate = function(password){
    return this.password === this.hashPassword(password);
}

module.exports = mongoose.model('user', userSchema);