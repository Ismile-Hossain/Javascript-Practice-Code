function div(a,b){
    if(b == 0){
       throw new Error("Second Parameter can not be Zero");
       //throw new RangeError("Second Parameter can not be Zero");
       //throw new TypeError("Second Parameter can not be Zero");
    }
    return a/b;
  }
  
  try{
    console.log(div(10,0));
  }catch(e){
    console.log(e);
    console.log(e.name);
    console.log(e.message);

  }finally{
    console.log("This block is always works");
  }