const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json('hey, this is api router');
});

module.exports = router;
