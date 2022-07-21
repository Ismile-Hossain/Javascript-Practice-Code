//Rest Parameter
function multiply(...args){
    let tmp=1;
    for(let val of args){
        tmp *= val;
    }
    return tmp;
}
console.log(multiply(2,3,4,7));