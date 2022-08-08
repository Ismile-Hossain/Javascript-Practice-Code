const numbers=[1,2,3,4,4,5,6,7,7];
const uniqNumber=[];
let mapping={};

for(let num of numbers){
    if(!mapping[num]){
      mapping[num] = true;
      uniqNumber.push(num);
     }
}
console.log(uniqNumber);