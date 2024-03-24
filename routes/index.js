// routes/index.js

const express = require('express');
const router = express.Router();

// Define your routes
router.get('/', (req, res) => {
  res.send('Hello, world!');
});

module.exports = router;