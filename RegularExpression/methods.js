const regExp =/hello/i;
console.log(regExp.source);
console.log(regExp.exec("hi! Hello World"));

/*String method*/
let str = "hi! Hello Hello Hello World";
console.log(str.match(regExp));
console.log(str.search(regExp)); // if match then return index otherwise return -1

console.log(str.replace(regExp,"there")); 

const regExpr =/hello/gi; //g means globally
console.log(str.replace(regExpr,"there")); //globally replace
