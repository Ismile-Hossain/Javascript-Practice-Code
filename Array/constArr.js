const arr = ["B","D"]; // not reassignable
arr.unshift("A");
console.log(arr);
arr.push("E");
console.log(arr);
arr.splice(2,0,"C");
console.log(arr);
arr.splice(1,1,"A");
console.log(arr);
arr.splice(1,0,"B");
console.log(arr);