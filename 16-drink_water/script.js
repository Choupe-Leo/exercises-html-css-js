const smallCups = document.querySelectorAll('.small');
const percentage = document.getElementById('percentage');
const liters = document.getElementById('liters');
const remained = document.getElementById('remained');

smallCups.forEach((cup, index) => {
    cup.addEventListener('click', () => fillSmallCups(index));
});

function fillSmallCups(index) {

    if(smallCups[index].classList.contains('full') && index === 7) {
        index--;
    } else if(smallCups[index].classList.contains('full') && !smallCups[index + 1].classList.contains('full')) {
        index--
    }

    smallCups.forEach((cup, idx) => {
        if(idx <= index) {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    })

    updateBigCup();
}

// 1. get amount of full small cups
// 2. get amount of total small cups
// 3. 

function updateBigCup() {
    const quantityFullCups = document.querySelectorAll('.small.full').length;
    const quantityTotalCups = smallCups.length;

    if(quantityFullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${ quantityFullCups / quantityTotalCups * 330}px`;
        percentage.innerText = `${ quantityFullCups / quantityTotalCups * 100}%`;
    }

    if(quantityFullCups < quantityTotalCups) {
        liters.innerText = `${(1 - quantityFullCups / quantityTotalCups) * 2}L`
    } else {
        remained.style.height = 0;
    }
}
