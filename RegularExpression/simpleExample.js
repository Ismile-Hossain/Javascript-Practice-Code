const regExp =/hello/;
console.log(regExp.test('hello world'));
console.log(regExp.test('hell world'));
console.log(regExp.test('Hello world'));

const regExpr =/hello/i;//here i is a modifier means case insensitive
console.log(regExpr.test('Hello world'));