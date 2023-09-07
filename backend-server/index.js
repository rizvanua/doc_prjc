const express = require('express');
const app = express();

let callCount = 0; // Variable to store the number of calls
let sum = 0; // Variable to store the sum of received numbers

// Middleware to parse JSON request bodies
app.use(express.json());

// Route to handle incoming calls from another server
app.get('/call', (req, res) => {
    callCount++;
    res.json({
        callCount,
      });
});

// Route to retrieve the call count and sum
app.get('/stats', (req, res) => {
  res.json({
    callCount,
  });
});

// Start the server and listen on port 4002
app.listen(3000, () => {
  console.log('Server is running on port 4002');
});
