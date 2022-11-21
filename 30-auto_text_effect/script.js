const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'J\'aime bien le JavaScript !';

let idx = 1;
let speed = 200 / speedEl.value;

chargeText();

function chargeText() {
    textEl.innerText = text.slice(0, idx);

    idx++;

    if(idx > text.length) {
        idx = 1;
    }

    setTimeout(chargeText, speed);
}

speedEl.addEventListener('input', (e) => {speed = 200 / e.target.value})