const http = require('http')

const userData = [
        {
            name: 'Aman',
            age:30,
            email:'aman@test.com'
        },
        {
            name: 'Sam',
            age:20,
            email:'sam@test.com'
        },
        {
            name: 'peter',
            age:30,
            email:'peter@test.com'
        }
    ]

http.createServer((req, resp) => {
    resp.setHeader("Content-type", "application/json")
    resp.write(JSON.stringify(userData))
    resp.end()
}).listen(6100)