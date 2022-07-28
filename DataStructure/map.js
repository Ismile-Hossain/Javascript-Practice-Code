let map = new Map();

map.set("Mango","aam");
map.set("Banana","kola");
map.set("Orange","komola");
map.set("One",1);
map.set("Two",2);

console.log(map);

for(let el of map){
    console.log(el);
}

map.delete("Banana");
console.log(map);

console.log(map.has("Orange"));
console.log(map.values());
console.log(map.keys());
console.log(map.entries());//print key wise value

map.clear();
console.log(map);




 