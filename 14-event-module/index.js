let event = require('events')
let myevent = new event.EventEmitter();


//Example 1: with normal Function
// function myfunc(){
//     console.log("Hello, Teach Coders")
// }
// myevent.on("ram", myfunc); // create a event

// myevent.emit("ram") //event fire



//Example 2: with arrow

        // myevent.on("ram", ()=>{
        //     console.log("Welcome to, Teach Coders Channel")
        // }); 

        // myevent.emit("ram") 

//Example 3: same type multiple event fire
        // myevent.on("ram", ()=>{
        //     console.log("Ram")
        // }); 
        // myevent.on("ram", ()=>{
        //     console.log("Shyam")
        // }); 
        // myevent.on("ram", ()=>{
        //     console.log("Suresh")
        // }); 
        // myevent.on("ram", ()=>{
        //     console.log("Gagan")
        // }); 

        // myevent.emit("ram") 


//Example 4: with parameter
        myevent.on("ram", (a,b)=>{
            console.log(a*b)
        }); 

        myevent.emit("ram", 10, 20) 


