var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req, res) {
	res.redirect('/burgers')
});

router.get('/burgers', function(req, res) {
	burger.selectAll(function(data) {
		var hbsObject = {burgers : data}
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.post('/burgers/insertOne', function(req, res) {
	burger.insertOne(['burger_name', 'devoured', 'date'], [req.body.burger_name, false, new Date()], function(data){
		res.redirect('/burgers');
	});
});

router.put('/burgers/updateOne/:id', function(req, res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	burger.updateOne({'devoured' : true}, condition, function(data){
		res.redirect('/burgers');
	});
});

module.exports = router;