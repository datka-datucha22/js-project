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