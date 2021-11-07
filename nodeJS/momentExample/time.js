const moment = require("moment");

const showDate = (date) => {
  const datum = moment(date).format("MMMM Do YYYY");
  return datum;
};

exports.showTime = showDate;
