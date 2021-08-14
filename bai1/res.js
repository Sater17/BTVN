let arr = require('./index');

console.log(arr)

function distance(ox, oy, ax, ay) {
    let tmp = Math.sqrt(Math.pow((ox - ax), 2) + Math.pow((oy - ay), 2))
    return tmp

}

function pointInCircle(ox, oy, ax, ay, rad) {
    let res = distance(ox, oy, ax, ay)

    if (res <= Number(rad)) {
        return true
    }
    else {
        return false
    }
}
function poinInFirst(arr, point) {
    let tmp = []

    let first = point

    for (let i = 2; i < arr.length; i++) {

        if (pointInCircle(first[0], first[1], arr[i][0], arr[i][1], first[2]) === true) {
            tmp.push(arr[i])
        }

    }
    return tmp
}
let A = arr[0]
let res = poinInFirst(arr, A);
console.log("Diem thu nhat: ")
console.log(res)
let B = arr[1]
let res_ = poinInFirst(arr, B);
console.log("Diem thu hai: ")
console.log(res_)