let tbody = document.querySelector('tbody');
console.log(tbody);

/*children finding strt*/
console.log(tbody.children);
console.log(tbody.childNodes);//treat newline as a child 
console.log(tbody.childElementCount);
console.log(tbody.children[1]);
//tbody.children[1].innerHTML = "Post 10";
console.log(tbody.children[1].innerHTML);

console.log(tbody.firstChild);
console.log(tbody.firstElementChild);
console.log(tbody.lastChild);
console.log(tbody.lastElementChild);
console.log(tbody.firstElementChild.children[1].children[0]);
/*children finding end*/

/*parent finding strt*/
console.log(tbody.parentElement);
console.log(tbody.parentNode);
console.log(tbody.parentElement.parentElement);
/*parent finding end*/

/*Sibling finding strt*/
console.log(tbody.children[1].previousSibling);
console.log(tbody.children[1].previousElementSibling);
console.log(tbody.children[1].nextSibling);
console.log(tbody.children[1].nextElementSibling);
/*Sibling finding end*/