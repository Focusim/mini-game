
var topp = 0
var left = 0

var itemWidth = document.getElementById('item').offsetWidth
var itemHeight = document.getElementById('item').offsetHeight

var boxWidth = document.getElementById('box').offsetWidth
var boxHeight = document.getElementById('box').offsetHeight

var winWidth = document.documentElement.clientWidth -= itemWidth
var winHeight = document.documentElement.clientHeight -= itemHeight

console.log("Ширина:" + winWidth + " Высота:" + winHeight)

document.addEventListener('keydown', function (event) {
    if (event.code == "ArrowLeft") {
        if (left >= 100) {
            left -= 100
            document.getElementById("item").style.right = null
        }
        document.getElementById("item").style.left = left + "px"
    }
    if (event.code == "ArrowRight") {
        if (left <= winWidth) {
            left += 100
            document.getElementById("item").style.left = left + "px"
        }
    }
    if (left > winWidth) {
        document.getElementById("item").style.left = null
        document.getElementById("item").style.right = "0px"
    }


    if (event.code == "ArrowUp") {
        if (topp >= 100) {
            topp -= 100
            document.getElementById("item").style.bottom = null
        }
        document.getElementById("item").style.top = topp + "px"
    }
    if (event.code == "ArrowDown") {
        if (topp <= winHeight) {
            topp += 100
            document.getElementById("item").style.top = topp + "px"
        }
    }
    if (topp > winHeight) {
        document.getElementById("item").style.top = null
        document.getElementById("item").style.bottom = "0px"
    }
    test1()
})
/////////////////////////////////////////////////////////////
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
var randomWidth = getRandomInt(0, winWidth)
document.getElementById('box').style.left = randomWidth + "px"
var randomHeight = getRandomInt(0, winHeight)
document.getElementById('box').style.top = randomHeight + "px"

function refresh() {
    var randomWidth = getRandomInt(0, winWidth)
    document.getElementById('box').style.left = randomWidth + "px"
    var randomHeight = getRandomInt(0, winHeight)
    document.getElementById('box').style.top = randomHeight + "px"

}
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
///console.log(arrBoxX)
///console.log("Стартовая точка по оси X: " + randomWidth)
///console.log("Конечная точка по оси X: " + lengthBoxX)
///console.log(arrBoxY)
///console.log("Стартовая точка по оси Y: " + randomHeight)
////-console.log("Конечная точка по оси Y: " + lengthBoxY)
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

var arrItemX = []
var arrItemY = []
var arrBoxX = []
var arrBoxY = []


function test1() {
    arrItemX = []
    checkLeft = item.getBoundingClientRect().x
    var lengthItemX = checkLeft + itemWidth
    for (i = checkLeft; i <= lengthItemX; i++) {
        parseInt(arrItemX.push(i))
    }
    //arrItemX.forEach(function (item, index, array) {
    //    arrLengthItemX = item
    //})
    arrItemY = []
    checkTop = item.getBoundingClientRect().y
    var lengthItemY = checkTop + itemHeight
    for (i = checkTop; i <= lengthItemY; i++) {
        arrItemY.push(i)
    }
    //arrItemY.forEach(function (item, index, array) {
    //    arrLengthItemY = item
    //})


    var lengthBoxX = randomWidth + boxWidth
    for (i = randomWidth; i <= lengthBoxX; i++) {
        arrBoxX.push(i)
    }
    //arrBoxX.forEach(function (item, index, array) {
    //    arrLengthBoxX = item
    //})


    var lengthBoxY = randomHeight + boxHeight
    for (i = randomHeight; i <= lengthBoxY; i++) {
        arrBoxY.push(i)
    }
    //arrBoxY.forEach(function (item, index, array) {
    //    arrLengthBoxY = item
    //})

    next = 0
    a = arrBoxX
    b = arrBoxY
    c = arrItemX
    d = arrItemY


    for (j = 0; j < itemWidth; j++) {
        for (i = 0; i < boxWidth; i++) {
            if (arrItemX[j] == arrBoxX[i]) {
                next = 1
                console.log("ось X совпадает")
                break
            }
            break
        }

    }
    if (next === 1) {
        for (j = 0; j < itemHeight; j++) {
            for (i = 0; i < boxHeight; i++) {
                if (arrItemY[j] == arrBoxY[i]) {
                    refresh()
                    console.log("yes")
                    break
                }
            }
            break
        }
    }
    console.log(next)
}
