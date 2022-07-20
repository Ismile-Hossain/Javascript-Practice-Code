let arr = [1,2,3,4,5,6];

console.log("*********Iteration using for**********");
for(let index=0; index<arr.length; index++)
{
    console.log(index,arr[index]);
}

console.log("*********Iteration using for of**********");
for(let val of arr){
    console.log(val);
}

console.log("*********Iteration using for in**********");
for(let index in arr){
    console.log(index,arr[index]);
}

console.log("*********Iteration using for each**********");
arr.forEach(function(num,index){
    console.log(index,num);
});

console.log("*********Iteration using for each with arrow fun**********");
arr.forEach((num,index)=>console.log(index,num));