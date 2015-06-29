function getMonthString(timestamp, shortMode) {
  shortMode = shortMode || false
  var months = [];
  months[0] = "January";
  months[1] = "February";
  months[2] = "March";
  months[3] = "April";
  months[4] = "May";
  months[5] = "June";
  months[6] = "July";
  months[7] = "August";
  months[8] = "September";
  months[9] = "October";
  months[10] = "November";
  months[11] = "December";

  month_value = timestamp.getMonth();

  return shortMode ? months[month_value].substring(0,3) : months[month_value];
}
exports.getMonthString = getMonthString;
