let http=require('http')
let path=require('path')
let express=require('express')
let student=require('./services/student_personal_details')
const err=require('./middleware/error')
const app=express()
const fs=require('fs')
http.createServer((req,res)=>{
    if(req.url!=='/'){
        res.statusCode=404
       return res.end('message not found')
    }
    res.statusCode=200
   res.end('hello world')

}).listen(8000,()=>console.log('server is running'))

const dirName=path.join(__dirname,'nodejs')
const fileName=path.join(dirName,'input.txt')
const outputName=path.join(dirName,'output.txt')
fs.readFile(fileName,'utf8',(err,data)=>{
    if(err) throw err;
    let res=data.toUpperCase()
    console.log(res)
    fs.appendFile(outputName,res,(err,data)=>{
        if(err) throw err;
        console.log(data)
    })



})
app.use(err)

app.use('/student',student)
app.listen(9000,()=>{
    console.log('server is running')
})


