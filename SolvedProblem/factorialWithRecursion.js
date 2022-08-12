function factorial(num){
    if(num === 0) return 1;
    
    return num*factorial(num-1);
   }
   let result=factorial(5);
   console.log(result);

   //5!=5*4*3*2*1*1