const body = document.body;
const slides = document.querySelectorAll('.slide');
const btnLeft = document.getElementById('left');
const btnRight = document.getElementById('right');

let activeSlideIndex = 0;

btnRight.addEventListener('click', () => {
    activeSlideIndex++;

    if(activeSlideIndex > slides.length - 1) {
        activeSlideIndex = 0;
    }

    setSlideToBody();
    setActiveSlide();
})

btnLeft.addEventListener('click', () => {
    activeSlideIndex--;

    if(activeSlideIndex < 0) {
        activeSlideIndex = slides.length - 1;
    }

    setSlideToBody();
    setActiveSlide();
})

setSlideToBody();

function setSlideToBody() {
    body.style.backgroundImage = slides[activeSlideIndex].style.backgroundImage;
}

function setActiveSlide() {
    for (let index = 0; index < slides.length; index++) {
        if(slides[index].classList.contains('active')) {
            slides[index].classList.remove('active');
        }
    }

    slides[activeSlideIndex].classList.add('active');
}

// function setActiveSlide() {
//     slides.forEach(slide => slide.classList.remove('active'));

//     slides[activeSlideIndex].classList.add('active');
// }