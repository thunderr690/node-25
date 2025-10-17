const http = require('http')


const age = 29
http.createServer((req, resp) => {
    resp.setHeader("Content-type", "text/html")
    resp.write(`
        <html/>
        <head/>
        <title>code step by step</title>
        </head/>
        <body>
        <h1> Hello Aman Singh </h1>
        <h2>`+age+`</h2>
          <h2> `+new Date +`</h2>
        <body/>
        </html>
        
        `)
    resp.end()
}).listen(4800)