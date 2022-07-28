/*weak set only take object not take other type of value*/
let ws = new WeakSet();

const obj1={};
const obj2={};

/*here store data based on memory location so duplicate allowed*/
ws.add(obj1);
ws.add(obj2);

console.log(ws);
console.log(ws.has(obj1));

ws.delete(obj1);
console.log(ws.has(obj1));