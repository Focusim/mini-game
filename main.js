var bott = 0
var left = 0
var itemWidth = document.getElementById('item').offsetWidth
var itemHeight = document.getElementById('item').offsetHeight
var winWidth = document.documentElement.clientWidth -= itemWidth
var winHeight = document.documentElement.clientHeight -= itemHeight

console.log("Ширина:" + winWidth + " Высота:" + winHeight)

document.addEventListener('keydown', function (event) {
    if (event.code == "ArrowLeft" && (event.ctrlKey || event.metaKey)) {
        if (left >= 100) {
            left -= 100
            document.getElementById("item").style.right = null
        }
        document.getElementById("item").style.left = left + "px"
    }
    if (event.code == "ArrowRight" && (event.ctrlKey || event.metaKey)) {
        if (left <= winWidth) {
            left += 100
            document.getElementById("item").style.left = left + "px"
        }
    }
    if (left > winWidth) {
        document.getElementById("item").style.left = null
        document.getElementById("item").style.right = "0px"
    }


    if (event.code == "ArrowUp" && (event.ctrlKey || event.metaKey)) {
        if (bott >= 100) {
            bott -= 100
            document.getElementById("item").style.bottom = null

        }
        document.getElementById("item").style.top = bott + "px"
    }
    if (event.code == "ArrowDown" && (event.ctrlKey || event.metaKey)) {
        if (bott <= winHeight) {
            bott += 100
            document.getElementById("item").style.top = bott + "px"
        }
    }
    if (bott > winHeight) {
        document.getElementById("item").style.top = null
        document.getElementById("item").style.bottom = "0px"
    }
})

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

var randomWidth = getRandomInt(0, winWidth)
document.getElementById('box').style.left = randomWidth + "px"
var randomHeight =  getRandomInt(0, winHeight)
document.getElementById('box').style.top = randomHeight + "px"



















