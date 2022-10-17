const slideContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const btnDown = document.querySelector('.down-btn');
const btnUP = document.querySelector('.up-btn');
const slidesLen = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLen - 1) * 100}vh`;

btnUP.addEventListener('click', () => changeSlide('up'));
btnDown.addEventListener('click', () => changeSlide('down'));


function changeSlide(direction) {

    if(direction === 'up') {
        activeSlideIndex++;
        if(activeSlideIndex > slidesLen - 1) {
            activeSlideIndex = 0;
        }
    } else if(direction === 'down') {
        activeSlideIndex--;
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLen - 1;
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * 100}vh)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * 100}vh)`;
    
}