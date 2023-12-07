import errorhandler from 'errorhandler';
import express from  'express';
import { CallCountDo } from '../call_resp.js';
import home from './home.js'
import login from './login.js'
const router = (app)=>{
    app.use(express.json());
function errorNotification(err, str, req) {  
  var title = 'Error in ' + req.method + ' ' + req.url  
  notifier.notify({  
    title: title,  
    message: str  
  })
 }
app.use(errorhandler({log: errorNotification}))
  
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something is broke!')
})
app.use('/', home)
app.use(login)

// Route to handle incoming calls from another server
app.get('/call', (req, res) => {
    const callCount = CallCountDo()
    res.json({
        callCount,
      });
});

// Route to retrieve the call count and sum
app.get('/stats', (req, res) => {
    const callCount = CallCountDo()
    res.json({
        callCount,
      });
});
// test next
app.use('/next', (req, res, next) => {
  console.log('Time for main function: %d', Date.now())
  next()
});
app.get('/next/admin', (req, res) => {
  console.log('!!!test')
  res.send('Welcome to Tutorials Point Admin')
});
app.get('/next/user', (req, res) => {
  console.log('!!!test')
  res.send('Welcome to Tutorials Point')
});

app.post('/sample', function(req, res) {
  console.log('receiving data ...');
  console.log('body is ',req.body);
  res.send(req.body);
});

app.use(function(req, res, next) {
  res.status(404);

  // // respond with html page
  // if (req.accepts('html')) {
  //   res.render('404', { url: req.url });
  //   return;
  // }

  // respond with json
  if (req.accepts('json')) {
    res.json({ error: 'Not found THIS PAGE' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});
}

export default router
