// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema. This will contain all object we need for the client to create the app.
var languageSchema = new Schema({
}, { collection: 'language' });


// the schema is useless so far
// we need to create a model using it
var Language = mongoose.model('language', languageSchema);

// make this available to our users in our Node applications
module.exports = Language;