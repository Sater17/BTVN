const express=require('express')
const app = express()
const cors=require('cors')
const helmet=require('helmet')
const fs =require('fs')
const os = require('os')

app.use(express.json())
app.use(express.static('logger'))

const data={
    1:{ 
        name: 'Deadpool',
        genre: 'Humor, Literature'
    },
    2:{ 
        name: 'Superman',
        genre: 'Action, Love Story, Romantic'
    }
}

function bookApi(req, res, next) {
    fs.appendFile('log.txt',req.ip+'\n',(e)=>{
       if(e){ console.log('e')}
        else{console.log('no e')}
    })
    res.send('asd')
    next()
}
// app.use('/books',(req,res,next) => {
//     // fs.appendFile('log.txt',req.ip+'\n')
//     res.send('sdsa')
//     next();
// })
app.get('/',bookApi,(req,res)=>{
    res.send('sucessfully')
})
app.get('/books',(req,res)=>{
    res.json(data)
})
app.get('/books/:id',(req,res)=>{
    res.json(data[req.params.id])
})

app.post('/books',(req,res)=>{
    console.log('post success')
})
app.delete('/books/:id',(req,res)=>{
    data[req.params.id]=undefined;
    console.log('delete success')
})

app.listen(8080)
