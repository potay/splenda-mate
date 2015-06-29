var express = require('express');
var router = express.Router();

// Modules
var cashflow = require('../modules/cashflow');
var utils = require('../modules/utils');

/* GET home page. */
router.get('/', function(req, res, next) {
  var db = req.db;

  var data = utils.initRenderData(
    { title: 'Splenda Housemate Cashflow Analysis' },
    { time: 'time'});

  db.collection('cashflow').find().toArray(function(err, result) {
    if (err) throw err;
    data['cashflow'] = result;
    collatedData = cashflow.collateData(result,
                                        ['deposit',
                                         'withdrawal',
                                         'timestamp'])
    data['first'] = cashflow.collateDataPoints(
                      collatedData['timestamp'].map(function(timestamp) {
                        return cashflow.dateToCoordinate(timestamp, new Date(2012, 01, 01, 0, 0, 0, 0));
                      }),
                      collatedData['deposit']
                    );
    data['second'] = cashflow.collateDataPoints(
                       collatedData['timestamp'].map(function(timestamp) {
                         return cashflow.dateToCoordinate(timestamp, new Date(2012, 01, 01, 0, 0, 0, 0));
                       }),
                       collatedData['withdrawal']
                     );
    console.log(data['first']);
    console.log(data['second']);
    data['timestamp'] = collatedData['timestamp'];
    res.render('cashflow/index', data);
  });
});

module.exports = router;
