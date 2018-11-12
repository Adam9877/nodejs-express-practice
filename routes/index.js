var mongoose = require('mongoose');
var LinkStatus = mongoose.model('LinkStatus');


exports.index = function(req, res){
	//res.render('index', {title: 'Express'});
	//res.send('index test');
	//res.locals.username = req.session.name;
	//res.locals.authenticated = req.session.logined;
	LinkStatus.find({},function(err, links, count){
		if(err){
			throw err;
			return;
		}
		res.render('index', {
			title: 'Link information about Economy',
			links: links	
		});
	});
	
	console.log('***** access homepage');
};

exports.hello = function(req, res){
	res.send('The time is ' + new Date().toString());
};

exports.addLink = function(req, res){
	res.render('addLink', {title: 'Add Link status'});
	console.log('***** access addLink');
	//res.render();
};

exports.add = function(req, res){
	new LinkStatus({
		linkNumber: req.body.linkNumber,
		linkIP: req.body.linkIP,
		downlinkPktLoss: 0,
		downlinkLatency: 0,
		downlinkJitter: 0,
		uplinkPktLoss: 0,
		uplinkLatency: 0,
		uplinkJitter: 0,
		measureDate: Date.now()
	}).save(function (err){
		if(err){
			console.log(err);
			return;
		}
		console.log('Save to DB');
	});

	console.log('***** access add');
	res.redirect('/');
};

exports.findLink = function(req, res){
	res.render('findLink', {title: 'Find Link status'});
		console.log('***** access findLink');
};

exports.find = function(req, res){
	LinkStatus.find({'linkNumber':req.body.linkNumber}, function(err, links, count){
		//
		res.render('find', {
			title: 'Link Status',
			links: links
		});
	});
};

exports.post = function(req, res){

};

exports.reg = function(req, res){

};

exports.doReg = function(req, res){

};

exports.login = function(req, res){

};

exports.doLogin = function(req, res){

};

exports.logout = function(req, res){

};