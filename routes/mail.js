var express = require('express');
var router = express.Router();

/* GET */
router.get('/', function(req, res, next) {
  console.log("MAILi GET:",req.body);
  res.send();
});

/* POST */
router.get('/', function(req, res, next) {
  console.log("MAIL POST:",req.body);
  res.send();
});

module.exports = router;
