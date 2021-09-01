const express=require('express')
const app=express()

const PORT=8080

app.get('/',(req,res)=>{
    res.send('get successful s')
})

app.get('/user',(req,res)=>{
    res.json({
        name: 'sater',
        id: '17'
    })
})

app.listen(PORT,()=>{
    console.log('listening on port')
})
