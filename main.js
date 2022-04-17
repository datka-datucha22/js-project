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

// let divCircle = document.querySelector('.sec3-icon')
// let elipse = document.querySelector('.elipse')
// divCircle.style.transition = 'all 1.5s'

// divCircle.addEventListener('mouseenter', function () {
//     divCircle.style.borderRadius = '50%'
//     divCircle.style.backgroundColor = '#E93656'
//     elipse.style.opacity = '0'

// })
// divCircle.addEventListener('mouseleave', function () {
//     divCircle.style.borderRadius = '0'
//     divCircle.style.backgroundColor = '#131A36'
//     elipse.style.opacity = '1'


// })