
fetchUser(27,function(user){
    console.log(user);
})

function fetchUser(userId,callback){
setTimeout(function(){
    let user ={
        Name : "Ismile",
        UserId: userId,
        email:"ismile@gmail.com"
    }
    callback(user);
});
}