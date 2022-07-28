let set = new Set();

/*Duplicate Element not inserted into set*/
set.add(100);
set.add(200);
set.add(300);
set.add(100);

console.log(set);
console.log(set.size);

/*delete element*/
set.delete(200);
console.log(set);
console.log(set.size);

/*travarsing*/
for(let el of set){
    console.log(el);
}

set.forEach((el)=>console.log(el));

/*clear set*/
set.clear();
console.log(set);