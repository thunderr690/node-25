const http = require('http')
const fs = require('fs')
const querystring = require('querystring')

http.createServer((req, resp) => {

    fs.readFile('html/form.html', 'utf-8', (error, data) => {
        //error handling
        if (error) {
            resp.writeHead(500, { "content-type": "text/plain" })
            resp.end('internal server error')
            return
        }
        //setting response Header
        resp.writeHead(200, { "content-type": "text/html" })

        //Handling different routes
        if (req.url == '/' && req.method === 'GET') {
            resp.write(data)
        }
        else if (req.url == '/submit' && req.method === 'POST') {
            let dataBody = []
            //collect form data
            req.on('data', (chunks) => {
                dataBody.push(chunks)
            })
            //Once all data is received
            req.on('end', () => {
                let rawdata = Buffer.concat(dataBody).toString()
                let readableData = querystring.parse(rawdata)
                // console.log(readableData);
                let dataString = "My name is " + readableData.name + "and my enail id is" + readableData.email
                console.log(dataString);
                fs.writeFileSync("text/" + readableData.name + ".txt", dataString)
                console.log("file Created");
                //async method
                fs.writeFile("text/" + readableData.name + ".txt", dataString, 'utf-8', (err) => {
                    if (err) {
                        resp.end(" internal server error")
                    } else {
                        console.log("file created ")
                    }
                })




                resp.write(`
                <h1>Data submitted Successfully</h1>
                <p><strong>Name:</strong> ${readableData.name} </p>
                <p><strong>Email:</strong> ${readableData.email} </p>
                <a href="/"> Go back</a>
                `)
                resp.end()
            })

        }
        else {
            resp.write('<h1>404 Not Found</h1>')
            resp.end()
        }
    })


}).listen(3200)

// http.createServer((req, resp) => {
//     resp.writeHead(200, {"content-type": "text/html"})
//     console.log(req.url)

//     if(req.url == '/'){
//     resp.write(`
//         <form action="/submit" method="post">
//         <input type="text" placeholder="enter name" name="name" />
//         <input type="text" placeholder="enter email" name="email" />
//         <button> SUBMIT </button>
//         </form>
//         `)
// }else if (
//     req.url == '/submit'
// ){
//     resp.write('<h1>Data submitted </h1>')
// }
//     resp.end()

// }).listen(3400)