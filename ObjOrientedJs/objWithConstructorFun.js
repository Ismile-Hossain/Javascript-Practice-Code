function User(name,age){
    console.log(this);
    this.name=name,
    this.age=name,
    this.walk=function(){
        console.log("Jhon start walking");
    }
    console.log(this);
}
const user1 = new User("Ismile",28);
console.log(user1);