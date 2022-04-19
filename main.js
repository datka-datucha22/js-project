let backgroundImages = [
    './img/section1/img1.jpg',
    './img/section1/img2.jpg',
    './img/section1/img3.jpg',
    './img/section1/img4.jpg'
]
document.querySelector('.section1').style.backgroundImage = `url('./img/section1/img1.jpg')`
let dd = 0;
setInterval(function () {
    if (dd === 3) {
        dd = -1;
    }
    dd++;
    document.querySelector('.section1').style.backgroundImage = `url('${backgroundImages[dd]}')`
}, 4000)



window.onload = function () {
    let effect = document.querySelector('.sec2-3')
    window.addEventListener('scroll', scrollEffect)
    function scrollEffect() {
        if (window.scrollY >= 820) {
            effect.style.opacity = '1'
            effect.style.transform = 'translateX(0px)'
            effect.style.transition = '2s ease-in-out'
        } else {
            effect.style.opacity = '0'
            effect.style.transform = 'translateX(-50px)'
        }
    }
    scrollEffect()
}

let sec4In = document.querySelector('.sec4-in')
let sec4On = document.querySelector('.on-sec4-part')
let onHov = document.querySelector('.on-hov')
let onHov1 = document.querySelector('.on-hov1')

function hoverThing(a, b) {
    onHov.addEventListener('mouseover', function () {
        a.style.display = 'none'
        b.style.display = 'block'
    })
    onHov.addEventListener('mouseout', function () {
        b.style.display = 'none'
        a.style.display = 'block'
    })


}
function hoverThing1(a, b) {
    onHov1.addEventListener('mouseover', function () {
        a.style.display = 'none'
        b.style.display = 'block'
    })
    onHov1.addEventListener('mouseout', function () {
        b.style.display = 'none'
        a.style.display = 'block'
    })


}
hoverThing(sec4In, sec4On)
let sec4In1 = document.querySelector('.sec4-in1')
let sec4On1 = document.querySelector('.on-sec4-part1')
hoverThing1(sec4In1, sec4On1)



let onHov2 = document.querySelector('.on-hov2')

function hoverThing2(a, b) {
    onHov2.addEventListener('mouseover', function () {
        a.style.display = 'none'
        b.style.display = 'block'
    })
    onHov2.addEventListener('mouseout', function () {
        b.style.display = 'none'
        a.style.display = 'block'
    })


}
let sec4In2 = document.querySelector('.sec4-in2')
let sec4On2 = document.querySelector('.on-sec4-part2')
hoverThing2(sec4In2, sec4On2)

let onHov3 = document.querySelector('.on-hov3')

function hoverThing3(a, b) {
    onHov3.addEventListener('mouseover', function () {
        a.style.display = 'none'
        b.style.display = 'block'
    })
    onHov3.addEventListener('mouseout', function () {
        b.style.display = 'none'
        a.style.display = 'block'
    })


}
let sec4In3 = document.querySelector('.sec4-in3')
let sec4On3 = document.querySelector('.on-sec4-part3')
hoverThing3(sec4In3, sec4On3)

let onHov4 = document.querySelector('.on-hov4')

function hoverThing4(a, b) {
    onHov4.addEventListener('mouseover', function () {
        a.style.display = 'none'
        b.style.display = 'block'
    })
    onHov4.addEventListener('mouseout', function () {
        b.style.display = 'none'
        a.style.display = 'block'
    })


}
let sec4In4 = document.querySelector('.sec4-in4')
let sec4On4 = document.querySelector('.on-sec4-part4')
hoverThing4(sec4In4, sec4On4)


let onHov5 = document.querySelector('.on-hov5')

function hoverThing5(a, b) {
    onHov5.addEventListener('mouseover', function () {
        a.style.display = 'none'
        b.style.display = 'block'
    })
    onHov5.addEventListener('mouseout', function () {
        b.style.display = 'none'
        a.style.display = 'block'
    })


}
let sec4In5 = document.querySelector('.sec4-in5')
let sec4On5 = document.querySelector('.on-sec4-part5')
hoverThing5(sec4In5, sec4On5)

let onHov6 = document.querySelector('.on-hov6')

function hoverThing6(a, b) {
    onHov6.addEventListener('mouseover', function () {
        a.style.display = 'none'
        b.style.display = 'block'
    })
    onHov6.addEventListener('mouseout', function () {
        b.style.display = 'none'
        a.style.display = 'block'
    })


}
let sec4In6 = document.querySelector('.sec4-in6')
let sec4On6 = document.querySelector('.on-sec4-part6')
hoverThing6(sec4In6, sec4On6)

let onHov7 = document.querySelector('.on-hov7')

function hoverThing7(a, b) {
    onHov7.addEventListener('mouseover', function () {
        a.style.display = 'none'
        b.style.display = 'block'
    })
    onHov7.addEventListener('mouseout', function () {
        b.style.display = 'none'
        a.style.display = 'block'
    })


}
let sec4In7 = document.querySelector('.sec4-in7')
let sec4On7 = document.querySelector('.on-sec4-part7')
hoverThing7(sec4In7, sec4On7)