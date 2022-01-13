let fs = require('fs');
let path = require('path')
let nextpath = path.join(__dirname, "myfile");

//console.log(nextpath)
for (let i = 0; i<5; i++ ){
    fs.writeFileSync(`${nextpath}/ram${i}.txt`, `Hello Teach Coders ${i}` )
}


