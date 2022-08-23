//controllers/bookmarksController.js
// require the Express module
const express = require('express');
// instantiate a router -- this will hold all the logic
// for the URLs + methods for this resource
const router = express.Router();
// import the bookmark model
const Note = require('../models/Note');

// Add routes to the router object
// Index: GET all the notes
router.get('/', async (req, res, next) => {
	try {
		// 1. Get all of the notes from the DB
		const notes = await Note.find({});
		// 2. Send them back to the client as JSON
		res.json(notes);
	} catch (err) {
		// if there's an error, pass it on!
		next(err);
	}
});

// Show: Get a Notes by ID
// router.get('/:id', async (req, res, next) => {
// 	try {
// 		// 1. Find the Notes by its unique ID
// 		const note = await Note.findById(req.params.id).populate('owner');
// 		// 2. Send it back to the client as JSON
// 		res.json(note);
// 	} catch (err) {
// 		// if there's an error, pass it on!
// 		next(err);
// 	}
// });

// Create: POST a Notes
router.post('/', async (req, res, next) => {
	try {
		// 1. Use the data in the req body to create a new notes
		const newNote = await Note.create(req.body);
		// 2. If the create is successful, send back the record that was inserted, specifying 201 status for Created
		res.status(201).json(newNote);
	} catch (err) {
		// 3. If there was an error, pass it on!
		next(err);
	}
});

// UPDATE: PUT a Note
router.put('/:id', async (req, res, next) => {
	try {
		// 1. Find the Note by its id, passing in two additional arguments:
		// the request body holds the updated information
		// { new: true } returns the updated document instead of the old one
		const noteToUpdate = await Note.findByIdAndUpdate(
			req.params.id,
			req.body,
			{
				new: true,
			}
		);
		// If a bookmark was found and operation successful
		if (noteToUpdate) {
			// send back updated note
			res.json(noteToUpdate);
		} else {
			// else send back 404 Not Found
			res.sendStatus(404);
		}
	} catch (error) {
		next(err);
	}
});

// Delete: DELETE a Note
router.delete('/:id', async (req, res, next) => {
	try {
		// 1. Find the Note by its id, passing in two additional arguments:
		// the request body holds the updated information
		// { new: true } returns the updated document instead of the old one
		const noteToDelete = await Note.findByIdAndDelete(req.params.id);
		console.log(noteToDelete);
		// If a note was found and operation successful
		if (noteToDelete) {
			// send back 204 No Content
			res.sendStatus(204);
		} else {
			// else send back 404 Not Found
			res.sendStatus(404);
		}
	} catch (error) {
		next(err);
	}
});



// Export this router object so that it is accessible when we require the file elsewhere
module.exports = router;
