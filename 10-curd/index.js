let fs = require('fs');
let path = require('path');
let folderpath = path.join(__dirname, "mydata");
console.log(folderpath)

//Example 1 : create flile and replace all file data
   //fs.writeFileSync(folderpath+"/2.txt", "Good afternoon")


//Example 2 : Update file date and create a new file
    // fs.appendFile(folderpath+"/3.txt", " , My name is Ram", ()=>{
    //     console.log("Data has been addd")
    // })
//Example 3 : read any file data
    // fs.readFile(folderpath+"/4.txt", "utf8", (er, rd)=>{
    //     if(!er){
    //         console.log(rd);
    //     }
    //     else{
    //         console.log("Sory, File not found")
    //     }
    // })
//Example 4 : rename file name
    // fs.rename(folderpath+"/5.txt", folderpath+"/7.txt", (x)=>{
    //     if(!x){
    //         console.log("File has been Renamed")
    //     }else{
    //         console.log("Sorry, File Not Found")
    //     }
    // })
//Example 5 : delate file
    fs.unlinkSync(folderpath+"/7.txt")