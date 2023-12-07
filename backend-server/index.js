import express from  'express';
import router from './router/index.js'
import { readFile } from './readFile.js'


const app = express();

let callCount = 0; // Variable to store the number of calls
let sum = 0; // Variable to store the sum of received numbers

// Middleware to parse JSON request bodies
router(app);
readFile();

// Start the server and listen on port 4002
app.listen(3032, () => {
  console.log('Server is running on port 4002');
});
