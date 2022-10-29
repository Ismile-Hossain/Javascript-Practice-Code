const promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve(1);},2000);
});

const promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve(2);},5000);
});

Promise.all([promise1,promise2]).then((res)=>console.log(res));
Promise.race([promise1,promise2]).then((res)=>console.log(res));