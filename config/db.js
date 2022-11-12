// In real project, never expose your credential in your code 
let atlasDB="mongodb+srv://dbuser:5y0QHOjnfr1hAkJv@cluster005.eeulasb.mongodb.net/products?retryWrites=true&w=majority";

let mongoose = require('mongoose');

module.exports = function(){

    // Connect to the database
    mongoose.connect(atlasDB);

    let mongodb = mongoose.connection;
    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('=== Connected to MongoDB ===');
    });

    return mongodb;
}