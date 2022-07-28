/*we can take any type of key for map but for weak map we take only obj*/
/*It only store location and it can not be traversed*/
let wm = new WeakMap();

const obj1={};
const obj2={};

wm.set(obj1,123); 

console.log(wm);
console.log(wm.has(obj1));
console.log(wm.get(obj1));

wm.delete(obj1);
console.log(wm.has(obj1));