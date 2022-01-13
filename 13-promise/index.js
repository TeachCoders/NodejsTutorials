
let mypromise = new Promise((resolve, reject)=>{
    let a = 10+10;
    if(a==30){
        resolve("Sucess")
    }
    else{
        reject("Unscess")
    }
})

mypromise.then((x)=>{
    console.log(x)
}).catch((y)=>{
    console.log(y)
})