/*!
 *~ myjs-common
 *~ Copyright(c) 2019 Answer.AI.L<answer_ljm@163.com>
 *~ MIT Licensed
 */

/**
 * 日期时间格式化工具类
 * 
 * @author AnswerALL<answer_ljm@163.com>
*/

/**
 * 日期格式化
 * 
 * Usage:
 * 	new Date().format("yyyy-MM-dd HH:mm:ss.S");
 * 	new Date().format("yy-MM-dd HH:mm:ss.S");
 * 	new Date().format("yyyyMMddHHmmss");
 * */
Date.prototype.format = function(pattern) {
    // 正则匹配表达式
    let exps = {
        // year(yy | yyyy)
        "(y+)": {							
            key: "year",
            value: this.getFullYear(),
            minLength: 2,
            maxLength: 4
        },
        // month(MM) range: 0-11
        "(M+)": {						
            key: "month",
            value: this.getMonth() + 1,
            minLength: 1,
            maxLength: 2
        },
        // date(dd)
        "(d+)": {						
            key: "date",
            value: this.getDate(),
            minLength: 1,
            maxLength: 2
        },
        // hour(HH)
        "(H+)": {						
            key: "hours",
            value: this.getHours(),
            minLength: 1,
            maxLength: 2
        },
        // minutes(mm)
        "(m+)": {						
            key: "minutes",
            value: this.getMinutes(),
            minLength: 1,
            maxLength: 2
        },
        // seconds(ss)
        "(s+)": {						
            key: "seconds",
            value: this.getSeconds(),
            minLength: 1,
            maxLength: 2
        },
        // milliseconds(S)
        "(S+)": {						
            key: "milliseconds",
            value: this.getMilliseconds(),
            minLength: 1,
            maxLength: 1
        }
    };

    for (let exp in exps) {
        if (new RegExp(exp).test(pattern)) {
            if (RegExp.$1.length < exps[exp].minLength || RegExp.$1.length > exps[exp].maxLength) {
                throw new Error(exps[exp].key + "'s length(" + RegExp.$1 + ") is error, The range is between " + exps[exp].minLength + " and " + exps[exp].maxLength + ".");
            }
            // RegExp.$1: 表示第一个子表达式所匹配的文本内容
            if (exp == "(y+)") {	
                pattern = pattern.replace(RegExp.$1, exps[exp].value.toString().substr(4 - RegExp.$1.length));
            } else {
                pattern = pattern.replace(RegExp.$1, (RegExp.$1.length == 1) ? exps[exp].value : ("00" + exps[exp].value).substr(exps[exp].value.toString().length));
            }
            // console.log(RegExp.$1 + ": " + exp + ": " + pattern)
        }
    }
    return pattern;
};



/**
 * 日期格式化工具
*/
class SimpleDateFormat {

    /**
     * 对当前日期进行格式化 
     * 
     * @param format [string] 日期格式(yyyy-MM-dd HH:mm:ss.S)
     * @return [string] 格式化结果
    */
    static formatNow(format) {
        return new Date().format(format);
    }

    /**
     * 对指定日期进行格式化 
     * 
     * @param date [Date] 日期
     * @param format [string] 日期格式(yyyy-MM-dd HH:mm:ss.S)
     * @return [string] 格式化结果
    */
    static formatDate(date, format) {
        if (!(date instanceof Date)) {
            return null;
        }
        return date.format(format);
    }
};

exports = module.exports = {
	SimpleDateFormat: SimpleDateFormat
};