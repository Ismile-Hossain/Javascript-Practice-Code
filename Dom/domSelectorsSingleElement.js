//let header = document.getElementsByClassName('header'); 
let header = document.getElementsByTagName('h1'); /*TagName ClassName work same*/
let headers = Array.from(header);

headers.forEach((header,index)=>{
    console.log(header.className); 
    header.style.color = "#fff";
    header.style.backgroundColor = '#333';
    header.style.padding = '15px';
    header.innerText = `Hello World [${index}]`;
});

let header1 = document.querySelectorAll('h1'); /*No need to convert it array,bydefault Array*/
//let headers1 = Array.from(header1);
console.log(header1);
header1.forEach((header,index)=>{
    console.log(header.className); 
    header.style.color = "#00FF00";
    header.style.backgroundColor = '#333';
    header.style.padding = '15px';
    header.innerText = `Hello World [${index}]`;
});

