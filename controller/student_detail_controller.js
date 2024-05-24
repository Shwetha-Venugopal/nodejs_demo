const getAllStudentDetails = (req, res,next) => {
    console.log(req.url);
    if (req.url !== '/') {
        const err=new Error('Not Found')
        err.status=404
        return req.send(err);
    }
    return res.status(200).send('hello world');
};

module.exports = getAllStudentDetails; 
