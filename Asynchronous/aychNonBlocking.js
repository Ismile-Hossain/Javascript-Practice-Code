/*synchornous blocking code*/
console.log("Before");
console.log("After");
/*synchornous blocking code*/

/*Asynchornous non blocking code*/
console.log("Before");
setTimeout(function(){console.log("Asynchornous");},2000);//make a schedule then execute after 2s
console.log("After");
/*Asynchornous non blocking code*/