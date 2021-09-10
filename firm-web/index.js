import express from 'express';
import { featureRouter } from './route/feature.js';
import { seriesRouter } from './route/series.js';

const app = express();
app.use(express.json());

const PORT=8080;

app.set('views engine', 'ejs')

app.get('/', (req, res) => {
    res.render('mainPage')
})

app.use('/phim-le',featureRouter)
app.use('/phim-bo',seriesRouter)

app.listen(PORT, console.log(`running in port: ${PORT}`));