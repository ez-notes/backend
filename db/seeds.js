const mongoose = require('./connection');

const Note = require('../models/Note');
const User = require('../models/User');
const noteseeds = require('./seeds.json');

Note.deleteMany({})
	.then(() => User.deleteMany({}))
	.then(() => {
		return User.create({name: 'Fake Person', password: 'password'})
			.then((user) =>
				noteseeds.map((note) => ({ ...note, owner: user._id }))
			)
			.then((notes) => Note.insertMany(notes));
	})
	.then(console.log)
	.catch(console.error)
	.finally(() => {
		process.exit();
	});
