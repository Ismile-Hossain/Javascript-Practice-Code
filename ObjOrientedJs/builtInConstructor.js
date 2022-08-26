let str1 = "I am Ismile";
let str2 = new String("I am Ismile");

console.log(str1);
console.log(str2);

let num1 = 11;
let num2 = new Number(11);

console.log(num1);
console.log(num2);

let bool1 = true;
let bool2 = new Boolean(true);

console.log(bool1);
console.log(bool2);

let color1 = ["red","green","black"];
let color2 = new Array("red","green","black");

console.log(color1);
console.log(color2);

console.log(typeof(color1));
console.log(typeof(color2));

let fun = new Function('num1','num2','return num1+num2');
console.log(fun(2,3));

let obj = Object({
    name:"Ismile",
    age:28
});

console.log(obj);
