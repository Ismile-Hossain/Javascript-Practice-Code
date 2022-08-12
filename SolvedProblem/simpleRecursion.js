function number(num){
 if(num > 10) return;
   //console.log(num); print 1 to 10 like queue
   number(num+1);
   console.log(num); //print 10 to 1 like stack
}
number(1);