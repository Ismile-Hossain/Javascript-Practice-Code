function user(name,age){
  const userObj={
    name,
    age,
    walk:function(){
        return console.log(`${name} is ${age} years old`);
    }
  }
  return userObj;
}

console.log(user("Ismile",27));
console.log(user("Shuvo",26));

let obj = user("Shuvo",26);
obj.walk();