var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var linkStatus = new Schema({
	linkNumber: String,
	linkIP: String,
	downlinkPktLoss: Number,
	downlinkLatency: Number,
	downlinkJitter: Number,
	uplinkPktLoss: Number,
	uplinkLatency: Number,
	uplinkJitter: Number,
	measureDate: Date
});

mongoose.model('LinkStatus', linkStatus);
mongoose.connect('mongodb://localhost/linkEconomy');