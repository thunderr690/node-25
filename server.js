const http = require('http')
http.createServer((req, resp) => {
   // resp.write("THis is AMan ADINghh")
    resp.write("<h1>THis is AMan ADINghh</h1>")
    resp.end("Hello")
}).listen(4800)


