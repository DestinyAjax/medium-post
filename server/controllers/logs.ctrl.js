const ActivityLogService = require('../services/Log');
const database = require('../_helpers/database');
const Log = database.Log;

//create activiy log method
exports.create = (req, res, next) => {
	if(req.body) {
		let logs = new Log();
		logs.user_id = req.body.user_id;
		logs.description = req.body.description;
		logs.ip_address = req.body.id_address;

		logs.save(function(err, logs) {
			if(err) {
				res.send(err);
			} else {
				res.json(logs);
			}
		});
	} else {
		res.status(401).json({
			'message': "Invalid Request"
		});
	}
}

// this method gets all the activity logs in the system
exports.getAllLogs = (req, res, next) => {
	Log.find(function(err, logs) {
		if(err) {
			res.send(err);
		}

		res.json(logs);
	});
}

//getting all activity logs associated with a user
exports.getUserLogs = (req, res, next) => {
	Log.find({user_id: req.params.user_id}, function(req, logs) {
		if(err) {
			res.send(err);
		}

		res.json(logs);
	})
}
