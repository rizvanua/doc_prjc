import express from  'express';
const router = express.Router();

export default router.get('/', (req, res) => {
    res.send('Welcome INDEX PAGE')
  });