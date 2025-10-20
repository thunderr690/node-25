const http = require('http')
const fs = require('fs')


http.createServer((req, resp) => {

    let file = "/home"
    if (req.url !='/'){
        file=req.url
    }

    if (req.url != "/style.css") {
        fs.readFile("html"+file+".html", "utf-8", (error, data) => {
            if (error) {
                resp.writeHead(500, { "content-type": "text/plain" })
                resp.end("internal server error")
                return false
            }
            resp.write(data)
            resp.end()
        })

    } else if (req.url == "/style.css") {
        fs.readFile("html/style.css", "utf-8", (error, data) => {
            if (error) {
                resp.writeHead(500, { "content-type": "text/plain" })
                resp.end("css not found")
                return false
            }

            resp.writeHead(200, { "content-type": "text/css" })
            resp.end(data)

        })
    }

    // resp.write("Page check")

}).listen(3200)