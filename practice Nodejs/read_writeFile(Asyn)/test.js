//Asynchronous (Non-Blocking)
//Structure is fs.readFile('File location', encoding, callback)
//Structure is fs.writeFile('File location', ${data}, callback)

//import Module or package file system
const fs = require('fs')

//read a input.txt file to working in this file
//ส่วน callback มี 2 พารามิเตอร์ err คือ กรณีอ่านไฟล์ผิดพลาด, data คือ เก็บผลลัพธ์จากการอ่านไฟล์เข้ามาทำงาน
fs.readFile("myFile/input.txt", 'utf-8', (err,data) => {
    if(err) return console.log("ERROR happening..", err)
    //write a file
    const outputText = `Hi Student\n${data}\nThis file was written on ${new Date()}`
    fs.writeFile("myFile/output.txt", outputText, err => {
        if(err) return console.log("ERROR happening..", err)
        console.log("Finish to write a file")
    })
}) 
