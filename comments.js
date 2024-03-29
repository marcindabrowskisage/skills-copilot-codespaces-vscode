// Create web server
const express = require('express');
const app = express();
const port = 3000;
// initialize the web server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});



