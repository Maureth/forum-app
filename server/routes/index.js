const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    data: "Hello World"
  });
});

router.get('/about', (rep,res) => {
  res.json({
    name: "forum-app",
    version:"0.1.0"
  });
});

module.exports = router;
