
async function  dbInfo(){
     try{
        const user = await fetchUser(27);
        const response = await sendMail(user.email);
        console.log(response);
     }catch(err){
       console.log(err.message);
     }
}

dbInfo();

function sendMail(mail) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            //console.log(`Sending mail to: ${mail}`);
            let response = { success: true };
            resolve(response);
            //reject(new Error("Error!!"));
        }, 2000);
    });
    return promise;
}

function fetchUser(userId) {
    
    const promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("Fetch User From Database!!");
            let user = {
                Name: "Ismile",
                UserId: userId,
                email: "ismile@gmail.com"
            }
            resolve(user);
        }, 2000);
    });
    return promise;
}