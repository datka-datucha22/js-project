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
            effect.style.transition = '1s ease-in-out'
        } else {
            effect.style.opacity = '0'
            effect.style.transform = 'translateX(-50px)'
        }
    }
    scrollEffect()
}