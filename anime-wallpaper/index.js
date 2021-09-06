import express from 'express';
import path from 'path';
import {router} from './router/tokyo-router.js'

const app = express();
const PORT=process.env.PORT || 8080;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("index.ejs")
})
app.get('/tokyo-ghost',router)

app.listen(PORT, console.log(`listening on port ${PORT}`))