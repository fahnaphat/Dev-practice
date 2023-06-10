const fs = require('fs')
const http = require('http')

const indexPage = fs.readFileSync(`${__dirname}/index.html`, `utf-8`) //__dirname is main folder 

const server = http.createServer((req,res) => {
    const pathName = req.url      //diaplay path that user request in URL
    console.log(pathName)

    if(pathName==="/" || pathName==="/index"){
        // res.end("<h1>Homepages</h1>")
        res.write(indexPage)
        
    }else{
        res.writeHead(404)
        res.end("<h1>Not Found</h1>")
    }

    
}).listen(8000, () => {
    //open port 8000 for connection and display message on console
    console.log("server running on port 8000 ...")
})



// or
// server.listen(8000, () => {
//   //open port 8000 for connection and display message on console
//   console.log("server running on port 8000 ...")
// })
