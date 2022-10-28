
const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        //resolve(1); /*print result in then*/
        reject(new Error('Error!!')); /*print result in Catch*/
    }, 2000);
});

console.log(promise);

promise
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err.message);
    });