/*synchornous blocking code*/
console.log("Before");

function fetchUser(){
    console.log("Fetching user from database");
    /*Asynchornous non blocking code*/
    setTimeout(function(){
       return {
        name :"Ismile",
        age : 28
       };       
    },2000);
    /*Asynchornous non blocking code*/
    //return 1;
}

let user = fetchUser(); 
console.log(user);

console.log("After");
/*synchornous blocking code*/