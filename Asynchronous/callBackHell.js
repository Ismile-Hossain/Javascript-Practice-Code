fetchUser(27, function (user) {
    console.log(user);
    sendMail(user.email,function(response){
       console.log(response);
    });
})

function sendMail(mail,callBack) {
    setTimeout(function () {
        let response = { success: true };
        callBack(response);
    }, 2000);
}

function fetchUser(userId, callback) {
    console.log("Test user");
    setTimeout(function () {
        let user = {
            Name: "Ismile",
            UserId: userId,
            email: "ismile@gmail.com"
        }
        callback(user);
    },2000);
}