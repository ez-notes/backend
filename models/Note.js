// models/Bookmark.js
// require the mongoose package from the connection pool
const mongoose = require('../db/connection');

// make a new schema with 2 properties, and assign it to a variable
const NoteSchema = new mongoose.Schema({
	title: String,
	note: String,
});

// instantiate the model, calling it "Note" and with the schema we just made
const Note = mongoose.model('Note', NoteSchema);

// export the newly created model
module.exports = Note;
