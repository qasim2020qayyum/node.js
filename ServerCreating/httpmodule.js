const http = require("http");

const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        res.end("hello from the other sides");
    } else if (req.url == "/about"){
        res.end("hello from the about sides");
    } else if (req.url == "/contact"){
        res.end("hello from the contact us side");
    } else {
        res.writeHead(404, { "content-type": "text/html"})
        res.end("404 error! page doesnot exist");
    }
})

server.listen(8000, "127.0.0.1", ()=>{
    console.log("listening to server");
})