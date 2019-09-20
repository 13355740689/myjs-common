let { RuntimeException } = require("../lib/runtimeException");

let cnt = 3;


try {
    if (cnt === 3) {
        throw new RuntimeException(99999, "值不符合要求");
    }
    console.log("抛出异常继续");
} catch (err) {
    console.log("catch error...")
    console.log("name: ", err.name);
    console.log("message: ", err.message)
    console.log("stack: ", err.stack)
    console.log("\n");
    console.log(JSON.stringify(err));
    return null;
}

console.log(".............")