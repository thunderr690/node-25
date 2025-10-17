const http = require('http')
const fs = require('fs')
http.createServer((req, resp) => {
    fs.readFile('html/web.html','utf-8',(err,data) => {
        if(err){
            resp.weiteHead(500,{"content-type":'text/plain'})
            resp.writeable('internal server error')
            resp.end()
            returm
        }
        resp.writeHead(200,{'content-type':'text/html'})
        resp.write(data)
        resp.end()
    })
}).listen(3200)