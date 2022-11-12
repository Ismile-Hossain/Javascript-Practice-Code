/*query selectors takes id# class. tag*/
//let header = document.querySelector('#add-post-title-id');//id
//let header = document.querySelector('.add-post-title-class');//class
let header = document.querySelector('h1');//tag-->take only first h1 tag single element
console.log(header);
console.log(header.id);
console.log(header.className);
console.log(header.classList);

header.style.backgroundColor = "red";
header.style.color = "white";
header.style.padding = "15px";
//header.style.display = 'none';

header.textContent = "Hi Ismile!!";
header.innerText = "Hi Shuvo!!";
header.innerHTML = '<span style = "color:black">Hi Mikhel!! </span>';