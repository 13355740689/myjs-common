let mr = require("../lib/fuRequire").FuRequire;


let files = [
    "C:\\Users\\answer\\Desktop\\pdf\\desc\\0.jpg",
    "C:\\Users\\answer\\Desktop\\pdf\\desc\\1.jpg",
    "C:\\Users\\answer\\Desktop\\pdf\\desc\\2.jpg",
    "C:\\Users\\answer\\Desktop\\pdf\\desc\\3.jpg",
    "C:\\Users\\answer\\Desktop\\pdf\\desc\\4.jpg",
    "C:\\Users\\answer\\Desktop\\pdf\\desc\\5.jpg",
];

let options = {
    method: 'post',
    host: 'localhost',
    port: 8888,
    path: '/xlo/admin/manage/upload',
    file: "file"
};

/* mr.http(files, options, (code, data) => {
    console.log(`响应码: ${code}`);
    console.log(`响应数据: ${data}`);
}); */

mr.https(files, options, (code, data) => {
    console.log(`响应码: ${code}`);
    console.log(`响应数据: ${data}`);
});


