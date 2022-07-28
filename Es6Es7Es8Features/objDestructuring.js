function greeting(user){
    console.log(`Hello ${user.name} (${user.age}) from ${user.address.long}, ${user.address.lat}`);
    /*destructuring obj*/
    const {name, age, address:{long,lat}} = user;
    //const {long,lat} = address;
    console.log(`Hello ${name} (${age}) from ${long}, ${lat}`);
}

/*destructuring obj shortcut*/
function desShortCut({name, age, address:{long,lat}}){
    console.log(`Hello ${name} (${age}) from ${long}, ${lat}`);
}
const user = {
    name:'Ismile',
    age:27,
    address:{
        long:23.33,
        lat:31.44
    },
};
greeting(user);
desShortCut(user);
