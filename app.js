const express = require('express')
const app = express()
const blogRouter = require('./routes/blogRouter')

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.sendFile('./views/index.html',{root:__dirname})
})

app.use('/blogs',blogRouter)


app.listen(5000,'localhost',()=>{
    console.log('server listening on port 5000')
})