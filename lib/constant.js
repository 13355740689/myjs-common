/*!
 *~ myjs-common
 *~ Copyright(c) 2019 Answer.AI.L<answer_ljm@163.com>
 *~ MIT Licensed
 */

 /**
  * 常量
  * 
  * @author AnswerALL<answer_ljm@163.com>
 */

/** MYJS-COMMON 库作者及发布日期 */
const MYJS_COMMON_AUTHOUR = "Answer.AI.L<answer_ljm@163.com>";
const MYJS_COMMON_PUBLISH_DATE = "2019-09-20";  	

/** 分隔符 */
const SEPARATOR = {
    /** 逗号 */
    COMMA: ",",
    /** 分号 */
    COLON: ";",
    /** 斜杆 */
    SLASH: "/"
}


/** 计算机存储计量单位 */
const STORAGE_UNIT = {
	/** 1 字节数 */
	B: 1,
	/** 1K字节数 */
	KB: 1 * 1024,
	/** 1MB 字节数 */
	MB: 1 * 1024 * 1024,
	/** 1GB 字节数 */
	GB: 1 * 1024 * 1024 * 1024,
	/**1TB 字节数 */
	TB: 1 * 1024 * 1024 * 1024 * 1024,
	/** 1PB字节数 */
	PB: 1 * 1024 * 1024 * 1024 * 1024 * 1024
};


/** 日期时间格式器 */
const DATE_FORMATTER = {
	/** 年格式化 */
	YEAR_FORMAT: "yyyy",
	/** 月格式化 */
	MONTH_FORMAT: "yyyy-MM",
	/** 日期格式化 */
	DATE_FORMAT: "yyyy-MM-dd",
	/** 时格式化 */
	HOUR_FORMAT: "yyyy-MM-dd HH",
	/** 分格式化 */
	MINUTE_FORMAT: "yyyy-MM-dd HH:mm",
	/** 秒格式化 */
	SECONDS_FORMAT: "yyyy-MM-dd HH:mm:ss",
	/** 时间格式化 */
	DATETIME_FORMAT: "yyyy-MM-dd HH:mm:ss.S"
}


/**
 * 日期类型枚举
*/
const DATE_ENUM = {
	YEAR: 			1000 * 60 * 60 * 24 * 30 * 12,
	MONTH: 			1000 * 60 * 60 * 24 * 30,
	DAY: 			1000 * 60 * 60 * 24,
	HOUR: 			1000 * 60 * 60,
	MINUTE: 		1000 * 60,
	SECONDS: 		1000,
	MILLISECONDS: 	1
}


/** 日期属性类型 */
const DATE_PROP_TYPE = {
	YEAR: 			"YEAR",
	MONTH: 			"MONTH",
	DAY: 			"DAY",
	HOUR: 			"HOUR",
	MINUTE: 		"MINUTE",
	SECONDS: 		"SECONDS",
	MILLISECONDS: 	"MILLISECONDS"
}

/** 文件上传请求响应码 */
const RESPONSE_CODE = {
	SUCCESS:		"00000",
	FAILED:			"00001",
	/* 非法参数 */
	INVALID_PARAM:	"10001"
}


exports = module.exports = {
	MYJS_COMMON_AUTHOUR: MYJS_COMMON_AUTHOUR,
	MYJS_COMMON_PUBLISH_DATE: MYJS_COMMON_PUBLISH_DATE,
	SEPARATOR: SEPARATOR,
	STORAGE_UNIT: STORAGE_UNIT,
	DATE_FORMATTER: DATE_FORMATTER,
	DATE_ENUM: DATE_ENUM,
	DATE_PROP_TYPE: DATE_PROP_TYPE,

	RESPONSE_CODE: RESPONSE_CODE
};