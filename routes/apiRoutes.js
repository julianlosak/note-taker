const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/notes', (req, res) => {
  const data = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf-8');
  const notes = JSON.parse(data);
  res.json(notes);
});

router.post('/notes', (req, res) => {
  res.json(newNote);
});

router.delete('/notes/:id', (req, res) => {
  const noteId = req.params.id;
  res.json({ message: 'Note deleted' });
});

module.exports = router;
