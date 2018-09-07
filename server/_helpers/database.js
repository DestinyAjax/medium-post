const config = require('../config.json');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let options = { keepAlive: 300000, connectTimeoutMS: 30000, useNewUrlParser: true};
mongoose.connect(config.connectionString, options);

module.exports = {
	User: require('../models/User')
}