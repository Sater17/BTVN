const express = require('express')
const app = express()
const cors = require('cors')
const helmet = require('helmet')
const fs = require('fs')
const os = require('os')
const path = require('path')

app.use(express.json())
app.use(express.static('logger'))
app.set('trust proxy', true)

const data = {
    1: {
        name: 'Deadpool',
        genre: 'Humor, Literature'
    },
    2: {
        name: 'Superman',
        genre: 'Action, Love Story, Romantic'
    }
}
const key = Object.keys(data)


//function middle

function bookApi(req, res, next) {
    fs.appendFile(__dirname + '/logger/log.txt', req.ip +
        req.method + req.originalUrl + '\n', (e) => {
            if (e) { console.log('e') }
           
        })
    next()
}
function isValid(req, res, next) {
    if (req.params.id > key.length) {
        res.sendStatus(404)
    }
    next();
}

//middleware
app.use('/books', (req, res, next) => {
    fs.appendFile(__dirname + '/logger/log.txt', 'ip: ' + req.ip +
        ' method: ' + req.method + ' URL: ' + req.originalUrl + ' path: ' + req.path + '\n', (e) => {
            if (e) { console.log('e') }
            
        })
    next();
})


//METHOD
app.get('/', bookApi, (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})
app.get('/books', (req, res) => {
    res.json(data)
})
app.get('/books/:id',isValid, (req, res) => {
    res.json(data[req.params.id])
})

app.post('/books', (req, res) => {

    console.log('post success')
})
app.delete('/books/:id', (req, res) => {
    data[req.params.id] = undefined;
    console.log('delete success')
})
app.put('/books/:id',(req, res)=>{
    data[req.params.id]=req.body
    console.log('put success')
})

app.listen(8080)
