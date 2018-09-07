const config = require('../config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const database = require('../_helpers/database');
const User = database.User;

module.exports = {
	authenticate,
	getAll,
	getById,
	create,
	update,
	delete: _delete
}

async function authenticate({username, password }) {
	const user = await User.findOne({ username });
	if (user && bcrypt.compareSync(password, user.password)) {
		const { password, ...userWithoutHash } = user.toObject();
		const token = jwt.sign({ sub: user.id }, config.secret);
		return {
			...userWithoutHash,
			token
		};
	}
}

async function getAll() {
	return await User.find().select('-hash');
}

async function getById(id) {
	return await User.findById(id).select('-hash');
}

async function create(data) {
	// validate
	if(await User.findOne({ username: data.username })) {
		throw 'Username "' + data.username + '" is already taken';
	}

	const user = new User(data);

	// hash password
	if (data.password) {
		user.password = bcrypt.hashSync(data.password, 10);
	}

	//save user
	await user.save();
}

async function update(id, data) {
	const user = await User.findById(id);

	// validate
	if (!user) throw 'User not found';
	if(user.username !== data.username && await User.findOne({ username: data.username })) {
		throw 'Username "' + data.username + '" is already taken';
	}

	// hash password if it waws entered
	if(data.password) {
		data.password = bcrypt.hashSync(data.password, 10);
	}

	// copy data properties to user
	Object.assign(user, data);
	await user.save();
}

async function _delete(id) {
	await User.findByIdAndRemove(id);
}

