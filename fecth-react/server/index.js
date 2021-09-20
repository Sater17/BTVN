import express from 'express'
import {processApi} from './controller/api.js'
const app=express()
const PORT=8080

app.use(express.json())
app.get('/',(req,res)=>{
    res.json({
        "status":"ok"
    })
})
app.use('/api',processApi)

app.listen(PORT,console.log(`Running in PORT: ${PORT}`))
