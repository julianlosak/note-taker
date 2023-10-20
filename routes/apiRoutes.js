const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Read notes from the database
router.get('/notes', (req, res) => {
  const data = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf-8');
  const notes = JSON.parse(data);
  res.json(notes);
});

// Create a new note
router.post('/notes', (req, res) => {
  // Process and save the new note to the database
  // ...

  res.json(newNote);
});

// Delete a note by ID
router.delete('/notes/:id', (req, res) => {
  const noteId = req.params.id;
  // Delete the note with the specified ID from the database
  // ...

  res.json({ message: 'Note deleted' });
});

module.exports = router;
