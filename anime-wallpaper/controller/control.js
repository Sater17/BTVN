const data ={
    img1:{
        name:'ken image',
        size:'1920x1200',
        src: 'https://cdn-amz.fado.vn/images/I/615UoMEsDEL.jpg'
    },
    img2:{
        name:'ken and friend image',
        size:'750x468',
        src:'https://ae01.alicdn.com/kf/H245c345957f24fdb86d545bc67298243a/8-42X29Cm-M-i-Tokyo-Ghoul-L-i-Poster-Anime-Xung-Quanh-Poster-Qu-T-ng.jpg'
    }
}
export function isValid(req, res, next) {
    if(req.params.name!==('img1'||'img2')) {
        res.sendStatus(404);
        
    }
    next();
}
export function tokyoControl(req, res) {
    res.send('sadsad')
}
export function img1Control(req, res) {
    res.render('sub.ejs',{image:data.img1.src})

}
export function img2Control(req, res) {
    res.render('sub.ejs',{image:data.img2.src})
}

export function addImg(req, res) {
    res.send('post img')
}
export function putImg(req, res) {
    res.send('put img')
}
export function delImg(req, res) {
    res.send('delete img')
}