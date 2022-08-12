function number(num){
 if(num == 10) return;
   console.log(num);
   number(num+1);
}
number(1);