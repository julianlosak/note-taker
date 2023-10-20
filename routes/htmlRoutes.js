const express = require('express');
const router = express.Router();

// Route to render the homepage (index.html)
router.get('/', (req, res) => {
  res.render('index');
});

// Route to render the notes page (notes.html)
router.get('/notes', (req, res) => {
  res.render('notes');
});

module.exports = router;
