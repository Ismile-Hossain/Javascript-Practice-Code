const numbers = [1,2,3,3,4,5];
let mapping = {};

for(let number of numbers){
   if(mapping[number]){
      console.log(`${number} is duplicate`);
   }else{
    mapping[number] = true;
   }
}