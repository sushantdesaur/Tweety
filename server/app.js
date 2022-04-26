const express = require("express");

// Initialize the express app
const app = express();

// Port Number
const port = 5000;

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


