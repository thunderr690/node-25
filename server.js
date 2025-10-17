const http = require('http')
http.createServer((req, resp) => {
   // resp.write("THis is AMan ADINghh")
    resp.write("<h1>THis is Aman singhh</h1>")
    resp.end("Hello Aman ")
}).listen(4800)


// http.createServer((req, resp) => {
//    // resp.write("THis is AMan ADINghh")
//     resp.write("<h1>Other Server</h1>")
//     resp.end("Hello Aman ")
// }).listen(5800)
