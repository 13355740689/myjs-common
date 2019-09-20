let du = require("../lib/dateUtils").DateUtils;
let { MYJS_COMMON_AUTHOUR, STORAGE_UNIT, SEPARATOR, DATE_ENUM } = require("../lib/constant");

let seq = "-----------------------------------------\n";

console.log(MYJS_COMMON_AUTHOUR);
console.log(STORAGE_UNIT.GB);
console.log(SEPARATOR.COLON);
console.log(seq);

console.log(du.before(new Date("2019-09-19"), new Date("2019-09-19")));
console.log(du.after(new Date("2019-09-19"), new Date("2019-09-19")));
console.log(seq);

console.log(du.addDays(new Date(), 10));
console.log(du.addDays(new Date(), -10));
console.log(du.addYears(new Date(), 10));
console.log(seq);

console.log(du.diff(new Date("2019-09-20"), new Date("2017-08-20"), DATE_ENUM.YEAR));
console.log(du.diff(new Date("2019-09-20"), new Date("2018-08-20"), DATE_ENUM.MONTH));
console.log(du.diff(new Date("2019-09-20"), new Date("2019-08-20"), DATE_ENUM.DAY));
console.log(du.diff(new Date("2019-09-20"), new Date("2019-08-20")));
console.log(du.diff(new Date("2019-09-20 12:00:00"), new Date("2019-09-18 20"), DATE_ENUM.HOUR));
console.log(du.diff(new Date("2019-09-20 12:25"), new Date("2019-09-20 12:10"), DATE_ENUM.MINUTE));
console.log(du.diff(new Date("2019-09-20 12:10:20"), new Date("2019-09-20 12:09:10"), DATE_ENUM.SECONDS));
console.log(du.diff(new Date("2019-09-20 08:08:09"), new Date("2019-09-20 08:08:08"), DATE_ENUM.MILLISECONDS));