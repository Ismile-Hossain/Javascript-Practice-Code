/*function scoped let*/
function checkerVar(){
    console.log(index);//this gives no error as var used
    console.log(flag);//this gives error as var used
    for(var index=0;index<3;index++){
       var flag=true;
       if(flag==true){
           console.log(index,"Hello");
       }
    }
}

checkerVar();

/*block scoped let*/
function checkerLet(){
    console.log(index);//this gives error as let used
    console.log(flag);//this gives error as let used
    for(let index=0;index<3;index++){
        let flag=true;
       if(flag==true){
           console.log(index,"Hello");
       }
    }
}

checkerLet();