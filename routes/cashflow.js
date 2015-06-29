var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var db = req.db;

  var data = { title: 'Splenda Housemate Cashflow Analysis' };

  db.collection('cashflow').find().toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    data['cashflow'] = result;
    console.log(data);
    data['first'] = [];
    data['second'] = [];
    data['timestamp'] = [];
    for (i in result) {
      data['first'].push(result[i].deposit);
      data['second'].push(result[i].withdrawal);
      data['timestamp'].push(result[i].timestamp.toISOString());
    }
    console.log(data['first']);
    console.log(data['second']);
    console.log(data['timestamp']);
    res.render('cashflow/index', data);
  });
});

module.exports = router;
