// var fs = require('fs'); 

// //fs read, write, rem, ....................
// //I want to read the data from the file1.txt and print the data on the console.

// fs.readFile('file1.txt', function(err, data){
//     console.log(data.toString());
// })

var http = require('http');

var server = http.createServer((req, res)=> {
    // console.log(req);
    if(req.url=='/')
    res.write("welcome to home");
    else if(req.url=='/aboutus')
    res.write('welcome to about us page')
    else
    res.write('Invalid url')

    res.end();
});

// console.log(server);

server.listen(3333, ()=>console.log("ITs working..."))
