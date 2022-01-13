//Example 1
console.log("This is My First Program of Node js")
//Example 2
let a = "Hello World";
console.log(a);

// Example 3
let c = 30;
let d = 20;
function myfunc(){
    return c+d
};
console.log(myfunc())

// Example 4
let student = ["Ram", "Shyam", "Suresh"]
for (let x of student){
    console.log(x);
}
//Example 5
let office = [
    {Name : "Rahul", age : 25},
    {Name : "Suresh", age : 28},
    {Name : "Gagan", age : 30},
]
for (let i = 0; i<office.length; i++){
    console.log(`Employ Name : ${office[i].Name}, Employ age : ${office[i].age}`);
}

let imdata = require('./app.js');
console.log(imdata.country);
console.log(imdata.state);