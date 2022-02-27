import { data,data2 } from "../index.js"

export function mainSeries(req, res){
    res.render('series.ejs',
    {
        data:data,
        data2:data2
    })
}

export function nameSeries(req, res){
    res.render('title.ejs',{
        title:title
    })
}