function div(a,b){
  if(b == 0){
     throw new Error("Second Parameter can not be Zero");
     //throw new RangeError("Second Parameter can not be Zero");
     //throw new TypeError("Second Parameter can not be Zero");
  }
  return a/b;
}
console.log(div(10,0));
