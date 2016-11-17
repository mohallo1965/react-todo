var moment = require('moment');

console.log(moment().format());

//january 1st 1970 .

var now = moment();
console.log('current timestamp',now.unix());

var timestamp = 1479403816;
timestamp = moment().unix()
var currentMoment = moment.unix(timestamp);
console.log('current moment',currentMoment.format('MMM D, YY @ h:mm a'));

console.log('current moment',currentMoment.format('MMMM Do, YYYY @ h:mm A'));

