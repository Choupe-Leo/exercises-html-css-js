const triggers = document.querySelectorAll('.toggle-box');

const good = document.getElementById('bien-fait');
const fast = document.getElementById('vite-fait');
const cheap = document.getElementById('moins-cher');

triggers.forEach(trigger => addEventListener('change', (e) => pickTheChoice(e.target)));

function pickTheChoice(selectedItem) {
    if(good.checked && fast.checked && cheap.checked) {
        if(cheap === selectedItem) {
            fast.checked = false;
        }

        if(fast === selectedItem) {
            good.checked = false;
        }

        if(good === selectedItem) {
            cheap.checked = false;
        }
    }
}