import express from 'express';
import { featureRouter } from './route/feature.js';
import { seriesRouter } from './route/series.js';

//data 
const data=[
    {src:"https://i.vietgiaitri.com/2020/5/28/dan-sao-hospital-playlist-viet-tam-thu-truoc-tap-cuoi-het-noi-loi-yeu-thuong-lai-tha-thinh-dan-tinh-bang-phan-2-sieu-khung-80a-4967569.jpg",
     name:"Hospital Playlist 2"},
     {src:"https://i.vietgiaitri.com/2020/5/28/dan-sao-hospital-playlist-viet-tam-thu-truoc-tap-cuoi-het-noi-loi-yeu-thuong-lai-tha-thinh-dan-tinh-bang-phan-2-sieu-khung-80a-4967569.jpg",
     name:"Hospital Playlist 2"},
     {src:"https://i.vietgiaitri.com/2020/5/28/dan-sao-hospital-playlist-viet-tam-thu-truoc-tap-cuoi-het-noi-loi-yeu-thuong-lai-tha-thinh-dan-tinh-bang-phan-2-sieu-khung-80a-4967569.jpg",
     name:"Hospital Playlist 2"},
     {src:"https://i.vietgiaitri.com/2020/5/28/dan-sao-hospital-playlist-viet-tam-thu-truoc-tap-cuoi-het-noi-loi-yeu-thuong-lai-tha-thinh-dan-tinh-bang-phan-2-sieu-khung-80a-4967569.jpg",
     name:"Hospital Playlist 2"}
]
const data2=[
    {src: "https://bloganchoi.com/wp-content/uploads/2021/08/3-ly-do-nen-don-cho-hometown-cha-cha-cha.jpg",
    name: "Hometown Cha-Cha-Cha"},
    {src: "https://bloganchoi.com/wp-content/uploads/2021/08/3-ly-do-nen-don-cho-hometown-cha-cha-cha.jpg",
    name: "Hometown Cha-Cha-Cha"},
    {src: "https://bloganchoi.com/wp-content/uploads/2021/08/3-ly-do-nen-don-cho-hometown-cha-cha-cha.jpg",
    name: "Hometown Cha-Cha-Cha"},
    {src: "https://bloganchoi.com/wp-content/uploads/2021/08/3-ly-do-nen-don-cho-hometown-cha-cha-cha.jpg",
    name: "Hometown Cha-Cha-Cha"}
]
const app = express();
app.use(express.json());

const PORT=8080;

app.set('views engine', 'ejs')

app.get('/', (req, res) => {
    res.render('mainPage.ejs',{
        data:data,
        data2:data2
    })
})

app.use('/phim-le',featureRouter)
app.use('/phim-bo',seriesRouter)

app.listen(PORT, console.log(`running in port: ${PORT}`));

export {data,data2};