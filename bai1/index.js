
const fs = require('fs')

let arr = []

// fs.readFile('data.txt', (err, data) => {
//     if (err) { console.log(err) }
//     else {
//         let tmp = data.toString().split('\n')

//         for (let i of tmp) {
//             arr.push(i.split(','))
//         }
//         for (let i = 0; i < arr.length; i++) {
//             for (let j = 0; j < arr[i].length; j++) {
//                 arr[i][j] = Number(arr[i][j])
//             }
//         }
//         exports.arr = arr
//         console.log(arr)
//     }

// })

const data = fs.readFileSync('data.txt')
let tmp = data.toString().split('\n')
for (let i of tmp) {
    arr.push(i.split(','))
}

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        arr[i][j] = Number(arr[i][j])
    }
}

module.exports = arr







// function distance(ox,oy,ax,ay){
//     return Math.sqrt((ox-ax)^2+(oy-ay)^2)
// }

// function pointInCircle(ox,oy,ax,ay,rad){
//     let res = distance(ox,oy,ax,ay)
//     if(res<=rad){
//         return true
//     }
//     else{
//         return false
//     }
// }
// function poinInFirst(arr){
//     let tmp=[]
//     let first=arr[0]
//     for (let i=2;i<arr.length();i++){
//         if(pointInCircle(first[0],first[1],arr[i][0],arr[i][1],first[2]))
//         {
//             tmp.push(arr[i])
//         }
//     }
//     return tmp
// }
// let t = pointInFirst(arr)
// console.log(t)