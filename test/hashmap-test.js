let {HashMap} = require("../lib/hashMap");

let map = new HashMap();
let sep = "---------------------";

console.log(map.isEmpty())
console.log(map.size());
console.log(sep);

for (let i = 0; i < 10; i++) {
    let key = "Answer" + i;
    let value = i; 
    map.put(key, value);
}
console.log(map.size());
console.log(map.get("Answer1"));
console.log(map.isEmpty())
console.log(map.keySet());
console.log(map.containsKey("Answer6"));
console.log(map.containsValue("7"));
console.log(sep);

console.log(map.containsKey("Answer1"));
map.remove("Answer1");
console.log(map.containsKey("Answer1"));
console.log(map.size());
console.log(sep);
console.log(map.toString());

map.clear();
console.log(map.size());
console.log(map.isEmpty());
console.log(sep);

console.log(map._table);
console.log(map._size);