const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// middleware

// /home
// /home/user

// app.use('/home', function() {...})

app.use(bodyParser.json());

app.get('*', function(req, res, next) {
    res.send('hello world');
});

// app.get('/home', function() {...})

app.listen(3000, function() {
    console.log('we are now listening on port 3000');
});