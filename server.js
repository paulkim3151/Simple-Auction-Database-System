var express = require('express');
var app = express();

var session = require('express-session');
//var router = require('./router/main')(app);

app.use(session({
 secret: '@#@$MYSIGN#@$#$',
 resave: false,
 saveUninitialized: true
}));

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine ('html', require('ejs').renderFile);


var server = app.listen(3000, function(){
    console.log("express server has started on port 3000")
});

app.use(express.static('public'));
app.use('/', require('./router/main'))
app.use('/api/user/', require('./api/user'))
app.use('/api/product/', require('./api/productlist'))


app.engine('html', require('ejs').renderFile);


