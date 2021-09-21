var topp = 0
var left = 0

var itemWidth = document.getElementById('item').offsetWidth
var itemHeight = document.getElementById('item').offsetHeight

var boxWidth = document.getElementById('box').offsetWidth
var boxHeight = document.getElementById('box').offsetHeight

var winWidth = document.documentElement.clientWidth -= itemWidth
var winHeight = document.documentElement.clientHeight -= itemHeight

// количество пикселей передвижения 'item'
var number = 101

console.log("Ширина:" + winWidth + " Высота:" + winHeight)

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
    return evt.touches ||             // browser API
        evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
            if (left >= number) {
                left -= number
                document.getElementById("item").style.right = null
            }
            document.getElementById("item").style.left = left + "px"
        } else {
            if (left <= winWidth) {
                left += number
                document.getElementById("item").style.left = left + "px"
            }
        }
    } else {
        if (yDiff > 0) {
            if (topp >= number) {
                topp -= number
                document.getElementById("item").style.bottom = null
            }
            document.getElementById("item").style.top = topp + "px"
        } else {
            if (topp <= winHeight) {
                topp += number
                document.getElementById("item").style.top = topp + "px"
            }
        }
    }
    if (left > winWidth) {
        document.getElementById("item").style.left = null
        document.getElementById("item").style.right = "0px"
    }
    if (topp > winHeight) {
        document.getElementById("item").style.top = null
        document.getElementById("item").style.bottom = "0px"
    }
    
    xDown = null;
    yDown = null;
    test1()
};

document.addEventListener('keydown', function (event) {
    if (event.code == "PageUp") {
        number += 10
    }
    if (event.code == "PageDown") {
        if (number >= 10) {
            number -= 10
        }
    }
    if (event.code == "ArrowLeft") {
        if (left >= number) {
            left -= number
            document.getElementById("item").style.right = null
        }
        document.getElementById("item").style.left = left + "px"
    }
    if (event.code == "ArrowRight") {
        if (left <= winWidth) {
            left += number
            document.getElementById("item").style.left = left + "px"
        }
    }
    if (left > winWidth) {
        document.getElementById("item").style.left = null
        document.getElementById("item").style.right = "0px"
    }


    if (event.code == "ArrowUp") {
        if (topp >= number) {
            topp -= number
            document.getElementById("item").style.bottom = null
        }
        document.getElementById("item").style.top = topp + "px"
    }
    if (event.code == "ArrowDown") {
        if (topp <= winHeight) {
            topp += number
            document.getElementById("item").style.top = topp + "px"
        }
    }
    if (topp > winHeight) {
        document.getElementById("item").style.top = null
        document.getElementById("item").style.bottom = "0px"
    }
    test1()
})

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

randomWidth = getRandomInt(0, winWidth)
document.getElementById('box').style.left = randomWidth + "px"
randomHeight = getRandomInt(0, winHeight)
document.getElementById('box').style.top = randomHeight + "px"


var arrItemX = []
var arrItemY = []
var arrBoxX = []
var arrBoxY = []

score = 0

function test1() {
    arrItemX = []
    checkLeft = item.getBoundingClientRect().x
    var lengthItemX = checkLeft + itemWidth
    for (i = checkLeft; i <= lengthItemX; i++) {
        parseInt(arrItemX.push(i))
    }

    arrItemY = []
    checkTop = item.getBoundingClientRect().y
    var lengthItemY = checkTop + itemHeight
    for (i = checkTop; i <= lengthItemY; i++) {
        arrItemY.push(i)
    }

    arrBoxX = []
    lengthBoxX = randomWidth + boxWidth
    for (i = randomWidth; i <= lengthBoxX; i++) {
        arrBoxX.push(i)
    }

    arrBoxY = []
    lengthBoxY = randomHeight + boxHeight
    for (i = randomHeight; i <= lengthBoxY; i++) {
        arrBoxY.push(i)
    }

    a = arrBoxX
    b = arrBoxY
    c = arrItemX
    d = arrItemY

    next = 0
    for (j = 0; j < itemWidth; j++) {
        for (i = 0; i < boxWidth; i++) {
            if (c[j] == a[i] || a[j] == c[i]) {
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
                if (d[j] == b[i] || b[j] == d[i]) {
                    randomWidth = getRandomInt(0, winWidth)
                    document.getElementById('box').style.left = randomWidth + "px"
                    randomHeight = getRandomInt(0, winHeight)
                    document.getElementById('box').style.top = randomHeight + "px"
                    score += 1
                    document.getElementById('score').innerHTML = "Score: " + score
                    console.log("yes")
                    test1()
                    break
                }
            }
            break
        }
    }
    console.log(arrItemX)
    console.log(arrBoxX)
}
