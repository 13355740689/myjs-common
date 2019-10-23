/*!
 *~ myjs-common
 *~ Copyright(c) 2019 Answer.AI.L<answer_ljm@163.com>
 *~ MIT Licensed
 */

 /**
  * 上传文件请求工具类
  * 
  * @author AnswerALL<answer_ljm@163.com>
  * @description Created At 2019-10-23 17:33:18
 */
const fs = require('fs');
const http = require('http');
const https = require('https');
const FormData = require('form-data');
const { RESPONSE_CODE } = require('./constant');

class MyRequire {
	constructor() { }

	/**
	 * 上传文件(http)
	 * 
	 * @param files []
	 * @param options {} `key=[method & host & port & path & file]`
	 * @param callback function(code, data)
	 * @returns callback
	*/
	static http(files, options, callback) {
		const formdata = new FormData();

		if (!(files instanceof Array) || files.length <= 0) {
			callback(RESPONSE_CODE.INVALID_PARAM, "参数非法");
			return;
		}

		files.forEach(path => {
			formdata.append(options["file"], fs.createReadStream(path));
		});

		options["headers"] = formdata.getHeaders();

		var request = http.request(options, response => {
			response.on('data',function (data) {
				let responseCode = RESPONSE_CODE.FAILED;
				if (this.statusCode == 200) {
					responseCode = RESPONSE_CODE.SUCCESS;
				}
				callback(responseCode, data);
			});
		});
		formdata.pipe(request);

		request.on("error", (err) => {
			callback(RESPONSE_CODE.FAILED, err.message);
		});
	}


	/**
	 * 上传文件(https)
	 * 
	 * @param files []
	 * @param options {} `key=[method & host & port & path & file]`
	 * @param callback function(code, data)
	 * @returns callback
	*/
	static https(files, options, callback) {
		const formdata = new FormData();
		
		if (!(files instanceof Array) || files.length <= 0) {
			callback(RESPONSE_CODE.INVALID_PARAM, "参数非法");
			return;
		}

		files.forEach(path => {
			formdata.append(options["file"], fs.createReadStream(path));
		});

		options["headers"] = formdata.getHeaders();
		options["requestCert"] = true;
		options["rejectUnauthorized"] = false;

		var request = https.request(options, res => {
			res.on('data', function (data) {
				// console.log(`response data: ${data}`);
				let responseCode = RESPONSE_CODE.FAILED;
				if (this.statusCode == 200) {
					responseCode = RESPONSE_CODE.SUCCESS;
				}
				callback(responseCode, data);
			});
		});
		formdata.pipe(request);

		request.on("error", (err) => {
			callback(RESPONSE_CODE.FAILED, err.message);
		});
	}

}	

exports = module.exports = {
	FuRequire: MyRequire
};
