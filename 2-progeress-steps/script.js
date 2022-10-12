let next = document.getElementById('next');
let prev = document.getElementById('prev');
let circles = document.querySelectorAll('.circle');

//éviter la création d'élément vide dans html
let progressBar = document.createElement('span');
progressBar.classList.add('progress-bar');
document.querySelector('.progress-container').appendChild(progressBar);

let currentActive = 1;

next.addEventListener('click', ()=> {
    currentActive++;

    if(currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
})

prev.addEventListener('click', ()=> {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    }

    update();
})

function update() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.active');

    progressBar.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    if (currentActive === 1) {
        prev.setAttribute('aria-disabled', true)
    } else if (currentActive === circles.length) {
        next.setAttribute('aria-disabled', true)
    } else {
        prev.removeAttribute('aria-disabled');
        next.removeAttribute('aria-disabled');
    }
}