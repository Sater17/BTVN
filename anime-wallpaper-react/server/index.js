import express from 'express'

const app=express()
const PORT=8080

app.use(express.json())
app.get('/',(req,res)=>{
    res.json({
        "status":"ok"
    })
})
app.get('/api',(req,res)=>{
    res.json({
        "api":"ok"
    })
})

app.listen(PORT,console.log(`Running in PORT: ${PORT}`))
