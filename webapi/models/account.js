// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema. This will contain all object we need for the client to create the app.
var accountSchema = new Schema({
  name: String,
  isSystem: Boolean,
  isActive: Boolean,
  createDate: Date,
  updateDate: Date
}, { collection: 'account' });

// custom method to add string to end of name
// you can create more important methods like name validations or formatting
// you can also do queries and find similar users 
// userSchema.methods.dudify = function() {
//     // add some stuff to the users name
//     this.name = this.name + '-dude'; 
  
//     return this.name;
//   };

// the schema is useless so far
// we need to create a model using it
var Account = mongoose.model('account', accountSchema);

// make this available to our users in our Node applications
module.exports = Account;