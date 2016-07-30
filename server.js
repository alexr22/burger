var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

// var orm = require('./config/orm.js');

// orm.selectAll('burgers');

// //need to figure out how to add the string that the user inputs her
// orm.insertOne('burgers','userInput')

// orm.updateOne('burgers', burgerNumber)

var app = express();


//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}))
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

var port = process.env.PORT;
app.listen(port);
