const express=require('express')
const getAllStudentDetails=require('../controller/student_detail_controller')


let router=express.Router()

router.get('/',getAllStudentDetails)


module.exports=router