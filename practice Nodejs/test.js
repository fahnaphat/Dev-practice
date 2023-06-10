//Blocking or syn
//import Module or package file system
const fs = require('fs')

//read a input.txt file to working in this file
const data = fs.readFileSync('myFile/input.txt','utf-8')                 //first parameter is file location, second parameter is encryption format
console.log(data)
console.log("End.")

//write file
const outText = `Hi student.\n${data}\nThis file was written on ${new Date()}`
fs.writeFileSync('myFile/output.txt',outText)
console.log("End to write file.")
