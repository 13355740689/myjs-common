/*!
 *~ myjs-common
 *~ Copyright(c) 2019 Answer.AI.L<answer_ljm@163.com>
 *~ MIT Licensed
 */

/**
 * 字符串工具类
 * 
 * @author AnswerALL<answer_ljm@163.com>
*/

/**
 * 字符串格式化
 * 
 * Usage:
 *  var format = "my name is: {}, age: {}, address: {}";
 *  let arr = ["Answer", 12, "FuJian"];
 *  String.format(format, arr);
 *
 *  String.format = function (source) {
 *      var args = arguments, i = 1;
 *      return source.replace(/{}/g, function (match, index, format) {
 *	        return args[i++];
 *      });
 *  };
 * */
String.format = function (text, args) {
    let i = 0;
    return text.replace(/{ *}/g, (match, index, src) => {
        let val = args[i++];
        val = (val == undefined) ? null : val;
        return val;
    });
};


/**
 * 查看字符串的结尾是否是以`c`开头的 返回 true OR false
 * Usage:   
 *      var message = "hello world";
 *      message.startWith("h")
 * */
String.prototype.startWith = function (c) {
    return (c == this.charAt(0));
}


/**
 * 查看字符串的结尾是否是以`c`结尾的 返回true OR false
 * Usage:   
 *      var message = "hello world";
 *      message.endWith("d")
 * */
String.prototype.endWith = function (c) {
    return (c == this.charAt(this.length - 1));
}


/**
 * 返回字符串末尾的指定个数`n`字符串
 * Usage:   
 *      var str = "chinese";
 *      str.lastEndChar()
 *      str.lastEndChar(3)
 * */
String.prototype.lastEndChar = function (num) {
    let length = this.length;
    num = (null != num)? (num > length) ? length : num : 1;
    return this.substring(length - num, length);
}


class StringUtils {
    /**
     * 字符串格式化
     * 
     * @param text [string] 待格式化字符串, 占位符为`{}`
     * @param args (string|number)[] 数组参数
     * @template `StringUtils.format("my name is: {}, age: {}, address: {}", ["Answer", 12, "FuJian"]);`
     * @returns string
    */
    static format(text, args) {
        return String.format(text, args);
    }

    /**
     * 字符串`str`是否以 `prefix` 开头
     * 
     * @param str [string] 字符串
     * @param prefix [string] 
     * @returns boolean
    */
    static startWith(str, prefix) {
        return str.startWith(prefix);
    }

    /**
     * 字符串`str`是否以 `suffix` 结尾
     * 
     * @param str [string] 字符串
     * @param suffix [string] 
     * @returns boolean
    */
    static endWith(str, suffix) {
        return str.endWith(suffix);
    }

    /**
     * 返回字符串`str`指定后`count`个字符
     * 
     * @param str [string] 字符串
     * @param count [number] 
     * @returns string
    */
    static lastEndChar(str, count) {
        return str.lastEndChar(count);
    }
}


exports = module.exports = {
	StringUtils: StringUtils
};