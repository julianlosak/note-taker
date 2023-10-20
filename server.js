const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static('public'));

app.get('/api/notes', (req, res) => {
  const notes = JSON.parse(fs.readFileSync(path.join(__dirname, 'db/db.json'), 'utf-8'));
  res.json(notes);
});

app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  newNote.id = Date.now().toString();
  const notes = JSON.parse(fs.readFileSync(path.join(__dirname, 'db/db.json'), 'utf-8'));
  notes.push(newNote);
  fs.writeFileSync(path.join(__dirname, 'db/db.json'), JSON.stringify(notes));
  res.json(newNote);
});

app.delete('/api/notes/:id', (req, res) => {
  const noteId = req.params.id;
  const notes = JSON.parse(fs.readFileSync(path.join(__dirname, 'db/db.json'), 'utf-8'));
  const updatedNotes = notes.filter((note) => note.id !== noteId);
  fs.writeFileSync(path.join(__dirname, 'db/db.json'), JSON.stringify(updatedNotes));
  res.json({ message: 'Note deleted' });
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/notes.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
