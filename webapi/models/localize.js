
// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema. This will contain all object we need for the client to create the app.
var localizeSchema = new Schema({
});


// the schema is useless so far
// we need to create a model using it
var Localize = mongoose.model('Localize', localizeSchema);

// make this available to our users in our Node applications
module.exports = Localize;