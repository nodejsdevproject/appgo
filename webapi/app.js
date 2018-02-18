var express = require('express');
var app = express();
app.use(express.static('www'))

var bodayParser = require('body-parser');
var mongoose = require('mongoose'); 

var User = require('./models/user')

mongoose.connect('mongodb://sa:Test1234@192.168.1.180:3301/webadmin');
//var db =  mongoose.connection;
// Get Mongoose to use the global promise library
//mongoose.Promise = global.Promise;


// mongoose.connect('mongodb://sa@192.168.1.180:3301/webadmin', function() { /* dummy function */ })
//     .then(() => {
//         return server.start();
//     })
//     .catch(err => { // mongoose connection error will be handled here
//         console.error('App starting error:', err.stack);
//         process.exit(1);
//     });


app.get('/api/users', function (req, res) {
    
    User.find({}, function(err, users) {
        if (err) throw err;
        // object of all the users
        
        res.json(users)
      });

})

app.listen(3001)
console.log('Started')
