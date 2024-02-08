const blogmodel = require('../model/blogmodel')
const newblog = new blogmodel.blogs()

exports.getblogs = async (req,res)=>{
newblog.getblogs().then((data)=>{
    res.json(data)
})
}

exports.postblogs = async (req,res)=>{
    newblog.postblogs(req.body).then((data)=>{
        res.send('success')
    })
}