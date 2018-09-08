const database = require('../_helpers/database');
const Log = database.Log;

module.exports = {
	getAll,
	getById,
	create,
}

async function getAll() {
	return await Log.find();
}

async function getById(id) {
	return await Log.findById(id);
}

async function create(data) {
	
}

