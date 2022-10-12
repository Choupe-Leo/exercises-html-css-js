const buttons = document.querySelectorAll('.ripple-btn');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const x = e.clientX;
        const y = e.clientY;

        const buttonLeftX = e.target.offsetLeft;
        const buttonTopY = e.target.offsetTop;

        const xInside = x - buttonLeftX;
        const yInside = y - buttonTopY;

        const circle = document.createElement('span');
        circle.classList.add('circle');
        this.appendChild(circle);
        
        circle.style.left = `${xInside}px`;
        circle.style.top = `${yInside}px`;

        setTimeout(() => {
            circle.remove();
        }, 500);
    })
})