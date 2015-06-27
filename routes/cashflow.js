var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cashflow/index', { title: 'Splenda Housemate Cashflow Analysis' });
});

module.exports = router;
