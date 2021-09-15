top = 0
left = 0

let winWidth = document.documentElement.clientWidth
let winHeight = document.documentElement.clientHeight
console.log("Ширина:" + winWidth + " Высота:" + winHeight)

document.addEventListener('keydown', function(event) {
    if (event.code == "ArrowLeft" && (event.ctrlKey || event.metaKey)) {
        if (left >= 100) {
            left -= 100
        }
        document.getElementById("item").style.left = left + "px"
    }
    if (event.code == "ArrowRight" && (event.ctrlKey || event.metaKey)) {
        if (left <= 1000) {
            left += 100
        }
        document.getElementById("item").style.left = left + "px"
    }
    if (event.code == "ArrowUp" && (event.ctrlKey || event.metaKey)) {
        if (bott >= 100) {
            bott -= 100
        }
        document.getElementById("item").style.top = bott + "px"
    }
    if (event.code == "ArrowDown" && (event.ctrlKey || event.metaKey)) {
        if (bott <= 100) {
            bott -= 100
        }
        document.getElementById("item").style.top = bott + "px"
    }
})