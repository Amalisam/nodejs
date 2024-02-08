const db =require('../config/db')


class blogs{
    constructor(){

    }

    async getblogs(){

    const returnData   = await db.execute('SELECT * FROM blogs').then((data)=>{
           return data[0]
        }).catch((err)=>{
            return err
        })
        return returnData
    }

    async postblogs(blogData){
        const query = `INSERT INTO blogs 
        (blog_name,blog_content,author) 
        VALUES 
        ("${blogData.blog_name}","${blogData.blog_content}","${blogData.author}")`

    const responceData    =await db.execute(query).then((data)=>{
            return data
        }).catch((err)=>{
            return err
        })

        return responceData

    }

}

module.exports = {blogs}