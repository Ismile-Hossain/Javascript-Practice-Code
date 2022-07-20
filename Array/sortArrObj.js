/*ascending order*/
let student = [
    {name:"ismile",age:42},
    {name:"shuvo",age:23}
]
student.sort((d1,d2)=>{
   if(d1.age > d2.age) return +1;
   if(d1.age === d2.age) return 0;
   if(d1.age < d2.age) return -1;
});
console.log(student);


/*ascending order shortcut*/
let doctor = [
    {name:"ismile",age:42},
    {name:"shuvo",age:23}
]

doctor.sort((n1,n2)=>{
    return n1.age-n2.age;
});
console.log(doctor);

/*desending order shortcut*/
let teacher = [
    {name:"ismile",age:42},
    {name:"shuvo",age:23}
]

teacher.sort((n1,n2)=>{
    return n1.age-n2.age;
}).reverse();
console.log(teacher);


