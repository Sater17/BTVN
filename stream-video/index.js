const express = require('express')
const app = express()
const fs = require('fs')

const PORT = 8080

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/video', (req, res) => {
    const range = req.headers.range;

    if (!range) {
        res.status(400).send('require range header')
    }
    console.log(range)
    const path = 'bigbuck.mp4'
    const videoSize = fs.statSync(path).size

    const CHUNK_SIZE = 512000
    const start = Number(range.replace(/\D/g, ""))
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1)

    const contentLength = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4",
    };

    // HTTP Status 206 for Partial Content
    res.writeHead(206, headers);

    // create video read stream for this particular chunk
    const videoStream = fs.createReadStream(path, { start, end });

    // Stream the video chunk to the client
    videoStream.pipe(res);
});


app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
});