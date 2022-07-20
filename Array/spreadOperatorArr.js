let arr = [1,2,3,4,5];
console.log(arr);

//clone version of arr
let copiedArr = [...arr];
console.log(copiedArr);

//array concatanation with spread operator
let arr1 = [1,2,3];
let arr2 = [4,5,6];

let concatedArr = [...arr1,...arr2];
console.log(concatedArr);