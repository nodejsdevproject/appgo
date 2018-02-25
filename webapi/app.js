var express = require('express');
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


var bodayParser = require('body-parser');
var mongoose = require('mongoose'); 

var User = require('./models/user')
var Account = require('./models/account')
var AppConfig = require('./models/appconfig')
var Entity = require('./models/entity')
var Language = require('./models/language')


mongoose.connect('mongodb://sa:Test1234@76.187.69.186:3301/webadmin');
app.get('/api/user', function (req, res) {
    
    User.find({}, function(err, users) {
        if (err) throw err;
        // object of all the users
        
        res.json(users)
      });
})

app.get('/api/account', function (req, res) {
    
    Account.find({}, function(err, accounts) {
        if (err) throw err;
        // object of all the users
        
        res.json(accounts)
      });
})

app.get('/api/appconfig', function (req, res) {
    AppConfig.find({}, function(err, appConfigs) {
        if (err) throw err;
        // object of all the users
        
        res.json(appConfigs)
      });
})

app.get('/api/entity', function (req, res) {
    
    Entity.find({}, function(err, entities) {
        if (err) throw err;
        // object of all the entities
        
        res.json(entities)
      });
})

app.get('/api/language', function (req, res) {
    Language.find({}, function(err, languages) {
        if (err) throw err;
        // object of all the languages
        
        res.json(languages)
      });
})

app.get('/api/uimodel', function (req, res) {
    var uiModel = {}

    AppConfig.find({}, function(err, appConfigs) {
        if (err) throw err;
        // object of all the users
        uiModel.appConfig = appConfigs[0];
        Language.find({}, function(err, languages) {
            if (err) throw err;
            uiModel.LocalizedStrings = languages[0];

            Entity.find({}, function(err, entities) {
                if (err) throw err;
                // object of all the entities
                uiModel.entitySchema = entities;
                res.json(uiModel)
              });

           
          });
      });
})


app.listen(2000)
console.log('Started')
