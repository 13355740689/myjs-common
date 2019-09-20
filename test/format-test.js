let { SimpleDateFormat } = require("../lib/simpleDateFormat");
let { StringUtils } = require("../lib/stringUtils");
let { DATE_FORMATTER } = require("../lib/constant");

console.log(SimpleDateFormat.formatNow(DATE_FORMATTER.DATETIME_FORMAT));
console.log(SimpleDateFormat.formatDate(new Date(), DATE_FORMATTER.DATETIME_FORMAT));
console.log(SimpleDateFormat.formatDate("", DATE_FORMATTER.DATETIME_FORMAT));

let arr = ["Answer", 12, "FuJian"];
console.log(StringUtils.format("my name is: {}, age: {}, address: {}", arr));
arr = ["Answer", 12];
console.log(StringUtils.format("my name is: {}, age: {}, address: {}", arr));

let str = "Hello World";
console.log(StringUtils.startWith(str, "H"));
console.log(StringUtils.startWith(str, "h"));
console.log(StringUtils.endWith(str, "D"));
console.log(StringUtils.endWith(str, "d"));
console.log(StringUtils.lastEndChar(str));
console.log(StringUtils.lastEndChar(str, 3));
console.log(StringUtils.lastEndChar(str, 100));