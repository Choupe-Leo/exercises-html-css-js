const content = document.querySelector('.content');
const times = document.querySelector('#times');

let clickTimes = 0;

if(clickTimes === 0) {
    times.innerText ='';
}

content.addEventListener('dblclick', (e) => {
    createHeart(e);
})

function createHeart(event) {
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');
    content.appendChild(heart);
    
    const click_position = {
        x: event.offsetX,
        y: event.offsetY
    }
    
    heart.style.left = `${click_position.x}px`;
    heart.style.top = `${click_position.y}px`;
    
    setTimeout(() => {
        heart.remove();
    }, 800);

    times.innerText = ++clickTimes;
}