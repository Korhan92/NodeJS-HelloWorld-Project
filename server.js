const http = require('http')

const myServer = http.createServer((req,res)=>{
    console.log(req.url)
    res.writeHead(200,{'content-type':'text/html;charset=utf-8'})
    if (req.url==="/") {
        res.write("<h1>HOME PAGE</h1>")
        
    } else if (req.url==="/student-page") {
        res.write("<h1>STUDENT PAGE</h1>")
        
    } else if (req.url==="/data") {
        res.writeHead(200,{'Content-Type': 'application/json'})
        res.write(JSON.stringify({ message: "This is a message from web server!"}))
    }
    // res.write("<h1>Hello World</h1>")
    // console.log("Hello world2222")
    res.end()
})qw

myServer.listen(3000)