var express = require('express');
var app = express();
app.use(express.static('www'))

var bodayParser = require('body-parser');
var mongoose = require('mongoose'); 

var User = require('./models/user')

mongoose.connect('mongodb://sa:Test1234@192.168.1.180:3301/webadmin');
app.get('/api/users', function (req, res) {
    
    User.find({}, function(err, users) {
        if (err) throw err;
        // object of all the users
        
        res.json(users)
      });

})

app.listen(3001)
console.log('Started')
