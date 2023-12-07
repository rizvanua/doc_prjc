const express = require('express');
const axios = require('axios');
const routes= require('./routes/index.js');
const app = express();
const errorhandler = require('./errorhandler.js');
const sessions = require('./controllers/sessions.js');
 /* important use only in development mode*/
 app.use(errorhandler) 
 /**/
 app.use(sessions());
routes(app);

// const sendCallToBack = async()=>{
//   try {
//     // Send a GET request to the microservice endpoint
//     const response = await axios.get('http://backend-server:3000/call');
//     // Extract the data from the response
//     const data = response.data;
//     console.log('!!!data',data)
//     return data

//     // Send the data as the response
//     // res.json(data);
//   } catch (error) {
//     console.error('Error:', error.message);
//     // res.status(500).send('Internal Server Error');
//   }
// }

// Define a route that handles GET requests to the root path
// app.get('/res', async (req, res) => {
//   // Send a simple HTML page as the response
  
//   const number = await sendCallToBack()
//   res.send(`
//     <!DOCTYPE html>
//     <html>
//       <head>
//         <title>Simple Express Server</title>
//       </head>
//       <body>
//         <h1>Welcome to the Simple Express Server!</h1>
//         <p>This is a basic HTML page served by Express.js.</p>
//         <p>!NUMBERS ${number?.callCount}</p>
//       </body>
//     </html>
//   `);
  
// });




// Start the server and listen on port 4001
app.listen(3031, () => {
  console.log('Server is running on port 3031');
});