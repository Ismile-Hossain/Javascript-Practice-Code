const arr=[1,2,3,4,5,6,7,8];
const target = 9;

for(let j=0;j<arr.length;j++){
   for(let i=j+1;i<arr.length;i++){
       if(arr[j]+arr[i]===target){
         console.log(arr[j]+" "+arr[i]+"=="+target);
       }
   }
}