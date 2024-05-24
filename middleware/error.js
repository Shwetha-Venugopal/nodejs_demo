const errHandler=(err,req,res,next)=>{
    console.log(`${req.methos}`)
    next()
}


module.exports=errHandler