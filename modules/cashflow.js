var utils = require('../modules/utils')

exports.collateData = function(data, fields) {
  /* Takes a list of dictionaries and collates each field in the dictionary.

  Args:
    data: (dictionary list) List of dictionaries which represent data.
    fields: (string list) List of fields to collate.

  Returns:
    (string=>a' list dictionary) Collated fields from the data set
  */

  fields = fields || [];

  if (!utils.checkElemType(fields, "string")) {
    throw "Fields are not all of string type.";
  }

  var collatedData = {};

  /* Initialize key value pairs if fields are specified */
  if (fields.length > 0) {
    for (i in fields) {
      collatedData[fields[i]] = [];
    }
  }

  /* Iterate through data set and collate data */
  for (i in data) {
    var item = data[i];
    if (fields.length > 0) {
      for (i in fields) {
        collatedData[fields[i]].push(item[fields[i]]);
      }
    } else {
      for (field in item) {
        if (field in collatedData) {
          collatedData[field].push(item[field]);
        } else {
          collatedData[field] = [item[field]];
        }
      }
    }
  }

  return collatedData;
}

exports.collateDataPoints = function(xList, yList) {
  /* Formats x and y data into data dictionary list ([{x:, y:}, {x:, y:}])

  Args:
    xList: (list) List of x data
    yList: (list) List of y data

  Returns:
    (dictionary list) data dictionary list
  */

  return utils.zip(xList, yList).map(function(dataList){
    return {x: dataList[0], y: dataList[1]};
  });
}

function dateToCoordinate(point, range_start) {
  return (point.getTime() - range_start.getTime());
}
exports.dateToCoordinate = dateToCoordinate;
