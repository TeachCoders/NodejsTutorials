 let fs = require('fs');
// fs.writeFileSync("app.txt", "Welcome to Our Channel");
// fs.unlinkSync("app.txt")

//console.log(process.argv[3])
let uservalue = process.argv;
if(uservalue[2] == "add"){
    fs.writeFileSync(uservalue[3], uservalue[4]); 
}
else if(uservalue[2] == "remove"){
    fs.unlinkSync(uservalue[3])
}
else{
    console.log("Invalid value")
}
