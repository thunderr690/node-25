const { Console } = require('console')
const fs  =  require('fs')




const operation = process.argv[2]
if(operation == 'write'){
    const name = process.argv[3]
    const content = process.argv[4]
    const fullname = "files/"+name+".txt"
    fs.writeFileSync(fullname,content)
}else if(operation == 'read'){
    const name = process.argv[3]
    // const content = process.argv[4]
    const fullname = "files/"+name+".txt"
    let data=fs.readFileSync(fullname,"utf-8")
    console.log(data)
}else if(operation == 'update'){
    const name = process.argv[3]
    const content = process.argv[4]
    const fullname = "files/"+name+".txt"
    let data=fs.appendFileSync(fullname,content)
    console.log(data)
}else if(operation == 'delete'){
    const name = process.argv[3]
    // const content = process.argv[4]
    const fullname = "files/"+name+".txt"
    fs.unlinkSync(fullname)
    
}else{
    console.log("Operation not found")
}
// fs.writeFileSync('files/apple.txt','this is a fruit') // this is for create file

// fs.unlinkSync('files/apple.txt  // this is for delete

// const data = fs.readFileSync('files/apple.txt',"utf-8")
// console.log(data)

// fs.appendFileSync('files/apple.txt',"this is good for health")

