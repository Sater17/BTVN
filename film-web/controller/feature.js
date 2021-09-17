import { data,data2 } from "../index.js"

export function mainFeature(req, res){
    res.render('feature.ejs',{
        data:data,
        data2:data2
    })
}


export function nameFeature(req, res){
    res.render('name.ejs')
}