let arr=[1,7,3,6,2,9,10,12];

/*ascending order*/
console.log(arr); //sort as a asci value


arr.sort((n1,n2) => n1-n2 );
console.log(arr);

/*desending order*/
arr.reverse();
console.log(arr);

arr.sort((n1,n2) => n2-n1 );
console.log(arr);