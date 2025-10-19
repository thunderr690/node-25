const querystring = require('querystring')

function userDataSubmit(req, resp) {

    let dataBody = []
    req.on('data', (chunks) => {
        dataBody.push(chunks)
    
    let rawdata = Buffer.concat(dataBody).toString()
    let readableData = querystring.parse(rawdata)
    // console.log(readableData);
    let dataString = "My name is " + readableData.name + " and my enail id is " + readableData.email
    console.log(dataString);
    })
    resp.write(`
        <h1>You can get data from user form here</h1>
        `)
}
module.exports = userDataSubmit