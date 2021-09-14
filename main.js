top = 0
left = 0


document.addEventListener('keydown', function (event) {
    if (event.code == "ArrowLeft" && (event.ctrlKey || event.metaKey)) {
        left -= 10
        document.getElementById("item").style.left = left + "px"
    }
    if (event.code == "ArrowRight" && (event.ctrlKey || event.metaKey)) {
        left += 10
        document.getElementById("item").style.left = left + "px"
    }
    if (event.code == "ArrowUp" && (event.ctrlKey || event.metaKey)) {
        top -= 10
        document.getElementById("item").style.left = top + "px"
    }
    if (event.code == "ArrowDown" && (event.ctrlKey || event.metaKey)) {
        top += 10
        document.getElementById("item").style.top = top + "px"
    }
})