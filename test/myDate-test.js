let { DATE_FORMATTER, DATE_PROP_TYPE } = require("../lib/constant");
let { MyDate } = require("../lib/myjs/myDate");

let seq = "---------------------------------------------\n";
// 显示的是 UTC 时间
console.log(new Date());
console.log(new Date().getUTCHours());

let date = new MyDate();
console.log(date);
console.log("1: ", date.format(DATE_FORMATTER.DATETIME_FORMAT));
console.log("2: ", date.add(10));
console.log("3: ", date.add(-15));
console.log("4: ", date.add(10, DATE_PROP_TYPE.MONTH));
console.log(seq);

console.log(new MyDate("2019-9-20 11:48:25").format(DATE_FORMATTER.DATE_FORMAT));
console.log(seq);

let dt = new MyDate();
dt.diff(new Date(),1);