import express from  'express';
const router = express.Router();



router.get('/login', (req, res) => {
    console.log('!!!GET')
    res.setHeader('Set-Cookie', 'loggedIn2=true');
    res.send('LOG IN PAGE!')
  });
  router.post('/login', (req, res,next) => {
    console.log('!!!POST-BODY',req.body)
    res.cookie('loggedIn','true')
    //res.setHeader('Set-Cookie', 'loggedIn2=true');
    res.send('test')
    next()
  });

  export default router