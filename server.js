const express = require('express');
require('dotenv').config()
const app = express();
const Router = require('./routes/index')
const port = process.ENV.PORT || 3000;
const host = process.env.HOST || "127.0.0.1"


// Use routes
app.use('/', Router);

// Start the server
app.listen(port, host, () => {
  console.log(`Server is running on port ${port}`);
});