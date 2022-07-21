//Hoisting
addDunc();

/*browser engine take this fun top of the script*/
function addDunc(){
    console.log("Orginal function");
}

//addFun();==>this gives error as it is not a pure fun rather it is a expression
const addFun = function(){
    console.log("Just a Expression type function");
}
addFun();