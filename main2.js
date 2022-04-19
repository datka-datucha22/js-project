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


let all = document.querySelector('.all-word')
let work = document.querySelector('.work-word')
let mockup = document.querySelector('.mockup-word')
let psd = document.querySelector('.psd-word')
let logo = document.querySelector('.logo-word')
let presentation = document.querySelector('.pres-word')
let icons = document.querySelector('.icons-word')

let projWord = document.querySelector('.proj-word')
let projWord11 = document.querySelector('.proj-word11')
let projWord22 = document.querySelector('.proj-word22')
let projWord33 = document.querySelector('.proj-word33')
let projWord44 = document.querySelector('.proj-word44')
let projWord55 = document.querySelector('.proj-word55')


function sec6click() {
    work.addEventListener('click', function () {
        projWord.style.display = 'flex'
        projWord11.style.display = 'none'
        projWord22.style.display = 'none'
        projWord33.style.display = 'none'
        projWord44.style.display = 'none'
        projWord55.style.display = 'none'
    })
}
sec6click()
function sec6click11() {
    mockup.addEventListener('click', function () {
        projWord11.style.display = 'flex'
        projWord.style.display = 'none'
        projWord22.style.display = 'none'
        projWord33.style.display = 'none'
        projWord44.style.display = 'none'
        projWord55.style.display = 'none'
    })
}
sec6click11()
function sec6click12() {
    psd.addEventListener('click', function () {
        projWord22.style.display = 'flex'
        projWord.style.display = 'none'
        projWord11.style.display = 'none'
        projWord33.style.display = 'none'
        projWord44.style.display = 'none'
        projWord55.style.display = 'none'
    })
}
sec6click12()
function sec6click13() {
    logo.addEventListener('click', function () {
        projWord33.style.display = 'flex'
        projWord.style.display = 'none'
        projWord11.style.display = 'none'
        projWord22.style.display = 'none'
        projWord44.style.display = 'none'
        projWord55.style.display = 'none'
    })
}
sec6click13()
function sec6click14() {
    presentation.addEventListener('click', function () {
        projWord44.style.display = 'flex'
        projWord.style.display = 'none'
        projWord11.style.display = 'none'
        projWord22.style.display = 'none'
        projWord33.style.display = 'none'
        projWord55.style.display = 'none'
    })
}
sec6click14()
function sec6click15() {
    icons.addEventListener('click', function () {
        projWord55.style.display = 'flex'
        projWord.style.display = 'none'
        projWord11.style.display = 'none'
        projWord22.style.display = 'none'
        projWord33.style.display = 'none'
        projWord44.style.display = 'none'
    })
}
sec6click15()
function sec6click6() {
    all.addEventListener('click', function () {
        projWord.style.display = 'none'
        projWord11.style.display = 'none'
        projWord22.style.display = 'none'
        projWord33.style.display = 'none'
        projWord44.style.display = 'none'
        projWord55.style.display = 'none'
    })
}
sec6click6()









function sec6Project(a, b) {
    a.addEventListener('mouseover', function () {
        b.style.display = 'flex'
    })
    a.addEventListener('mouseleave', function () {
        b.style.display = 'none'
    })
}
let sec6Proj = document.querySelector('.sec6-proj')
let sec6Proj11 = document.querySelector('.sec6-proj11')
let sec6Proj22 = document.querySelector('.sec6-proj22')
let sec6Proj33 = document.querySelector('.sec6-proj33')
let sec6Proj44 = document.querySelector('.sec6-proj44')
let sec6Proj55 = document.querySelector('.sec6-proj55')
sec6Project(sec6Proj, projWord)
sec6Project(sec6Proj11, projWord11)
sec6Project(sec6Proj22, projWord22)
sec6Project(sec6Proj33, projWord33)
sec6Project(sec6Proj44, projWord44)
sec6Project(sec6Proj55, projWord55)