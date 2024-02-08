const blgList = document.querySelector('.viewBlg')
const form = document.querySelector('.form')
const btn = document.querySelector('.btn')

document.addEventListener('DOMContentLoaded', async(e)=>{

  const fetchData  = await fetch('http://localhost:5000/blogs/getblogs').then((data)=>{
        return data.json()
    }).then((jasonData)=>{
       return jasonData
    }).catch((err)=>{
        console.log(err)
    })

    fetchData.forEach((resdata)=>{
        blgList.innerHTML += ` <h1>${resdata.blog_name}</h1>
                                <p>${resdata.blog_content}</p>
                                <h3>${resdata.author}</h3>`
    })


})

btn.addEventListener('click',(e)=>{
 e.preventDefault();

 const form1 = new FormData(form)
 const resLoad = JSON.stringify(Object.fromEntries(form1.entries()))

 console.log(resLoad)


 fetch('http://localhost:5000/blogs/postblogs',{ 
    method:"POST",
    headers:{
        "Content-Type":"Application/json",
        "Accept":"Application/json"
    },
    body:resLoad
}).then(()=>{
    form.reset()
})

})


