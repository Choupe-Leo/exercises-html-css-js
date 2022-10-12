const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target'); //add "+" to turn target into number type
        const c = +counter.innerText;

        const increment = target / 150;
        // console.log(increment);

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 10);
        } else {
            counter.innerText = target;
        }
    }

    updateCounter();
})