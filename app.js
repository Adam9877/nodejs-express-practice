require('./lib/db');
var express = require('express');
var routes = require('./routes');
var app = express();

app.configure(function(){
	app.set('views', __dirname + '/views');
	app.set('view engine', 'ejs');
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(__dirname + '/public'));

});

app.configure('development', function(){
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true}));
});

app.configure('production', function(){
	app.use(express.errorHandler());
});

//Routes

app.get('/', routes.index);
app.get('/hello', routes.hello);
//app.get('/u/:user', routes.user);
app.get('/addLink', routes.addLink);
app.post('/add', routes.add);

app.get('/findLink', routes.findLink);
app.post('/find', routes.find);

app.post('/post', routes.post);
app.get('/reg', routes.reg);
app.post('/reg', routes.doReg);
app.get('/login', routes.login);
app.post('/login', routes.doLogin);
app.get('/logout', routes.logout);

app.listen(3000);
console.log("Express server is running");