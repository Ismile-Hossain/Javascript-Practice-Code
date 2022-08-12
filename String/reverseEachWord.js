/*reverse each word of a each string*/
/*method-->1*/
const str = "Hello World";
const words = str.split(" ");
const arr=[];
console.log(words);

for(let word of words){
    arr.push(word.split('').reverse().join(''));
}
console.log(arr);

/*method-->2 shortcut*/
const strr = "Hello World";
const reverseWordArr = strr.split(' ').map((word)=> word.split('').reverse().join('')).join(' ');
console.log(reverseWordArr);