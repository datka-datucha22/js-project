let userRecomendation = [
    {
        recomendation: 'He was always accommodating, committed, and motivated. We worked on many projects together, and he is very applied and aims for high-quality work. Anyone would be lucky to have Davit as a colleague.',
        Image: './img/section5/rec1.jpg',
        name: 'Megi'
    },
    {
        recomendation: 'Anyone would be lucky to have Davit as a colleague.',
        Image: './img/section5/rec4.jpg',
        name: 'Tamari'
    },
    {
        recomendation: 'He was always accommodating, committed, and motivated.',
        Image: './img/section5/rec3.jpg',
        name: 'Luka'
    },
    {
        recomendation: 'We worked on many projects together, and he is very applied and aims for high-quality work.',
        Image: './img/section5/rec2.jpg',
        name: 'Mari'
    }
]
let currentSlideIndex = 0
next()

function next() {
    let nextSlideIndex = currentSlideIndex + 1
    if (nextSlideIndex > userRecomendation.length - 1) {
        nextSlideIndex = 0
    }
    setActiveSlide(nextSlideIndex)

}
function setActiveSlide(newIndex) {
    currentSlideIndex = newIndex
    let recomendation = document.querySelector('.recomendation')
    recomendation.innerHTML = userRecomendation[currentSlideIndex].recomendation

    let recImg = document.querySelector('.rec-image')
    recImg.src = userRecomendation[currentSlideIndex].Image


    let name = document.querySelector('.rec-name')
    name.innerHTML = userRecomendation[currentSlideIndex].name
    setActiveBullets()
}
function createBullets() {
    let sec5 = document.querySelector('.sec5')
    let bullets = document.createElement('button')
    sec5.appendChild(bullets)
    bullets.className = 'bullets'

    for (let i = 0; i < userRecomendation.length; i++) {
        let bullet = document.createElement('button')
        bullets.appendChild(bullet)
        bullet.className = 'bullet'
    }


}
createBullets()

function setActiveBullets() {
    let buttons = document.querySelectorAll('.bullet')
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active')
        buttons[i].addEventListener('click', function () {
            setActiveSlide(i);

        })
        buttons[currentSlideIndex].classList.add('active')

    }


}
setActiveBullets()
