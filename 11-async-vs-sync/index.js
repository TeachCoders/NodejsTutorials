// let myfunc1 = ()=>{
//     console.log("Roll : 1")
// }
// let myfunc2 = ()=>{
//     console.log("Roll : 2")
// }
// let myfunc3 = ()=>{
//     console.log("Roll : 3")
// }
// myfunc1();
// myfunc2();
// myfunc3()

// let myfunc1 = ()=>{
//     console.log("Roll : 1")
// }
// let myfunc2 = ()=>{
//     setTimeout(()=>{
//         console.log("Roll : 2")
//     }, 3000)
   
// }
// let myfunc3 = ()=>{
//     console.log("Roll : 3")
// }
// myfunc1();
// myfunc2();
// myfunc3()

let a = 80;
let b = 0;
setTimeout(()=>{
 b = 20;
},3000)

console.log(a+b)
