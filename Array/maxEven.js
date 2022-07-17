const evens=[10,15,17,19,20,26];
const onlyEven = evens.filter((num)=>{
    if(num%2==0){
        return num;
    }
});
console.log(onlyEven);
console.log(Math.max(...onlyEven));/// Spread operator

const evenValue = evens.reduce((maxValue,num)=>{
   if(num>maxValue){
     return num
   }
},-1);
console.log(evenValue);

