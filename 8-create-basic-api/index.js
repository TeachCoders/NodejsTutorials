// Example 1 : singale object data
    // let http = require('http');
    // http.createServer((req, res)=>{
    //     res.writeHead(200, {"content-type" : "application/json"})
    //     res.write(JSON.stringify({Name : "ram", age : 25}))// server body
    //     res.end()
    // }).listen(200)

// Example 2 : multiple object data
    // let http = require('http');
    // http.createServer((req, res)=>{
    //     res.writeHead(200, {"content-type" : "application/json"})
    //     res.write(JSON.stringify([
    //         {Name : "ram",   age : 25},
    //         {Name : "shyam", age : 28},
    //         {Name : "shyam", age : 27},
    //         {Name : "suresh", age : 29},
    //         {Name : "manohar", age : 24},
    //     ]))// server body
    //     res.end()
    // }).listen(200)

    //Example 3 : use with another file (Module)
        let http = require('http');
        let mydata = require('./studentdata')
        http.createServer((req, res)=>{
            res.writeHead(200, {"content-type" : "application/json"})
            res.write(JSON.stringify(
                mydata
            
            ))// server body
            res.end()
        }).listen(200)
    