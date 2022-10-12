const secondEl = document.querySelector('.second');
const minuteEl = document.querySelector('.minute');
const hourEl = document.querySelector('.hour');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggleEl = document.querySelector('.toggle');

const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
const months = ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"];

// 1. toggle dark mode funtion
toggleEl.addEventListener('click', (e) => {
    const html = document.querySelector('html');

    html.classList.toggle('dark');

    if(html.classList.contains('dark')) {
        e.target.innerText = "Mode claire";
    } else {
        e.target.innerText = "Mode ombrée";
    }
})

// 2. clock function
function setTime() {
    const time = new Date();
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours() % 12;
    const date = time.getDate();
    const day = time.getDay();
    const month = time.getMonth();
    // const timeFormat = hours % 12;
    const ampm = hours > 12 ? 'PM' : 'AM';

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hours, 0, 11, 0, 360)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;

    timeEl.innerText = `${hours}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

// 3. scale function for mapping 0-11 over 0-360 (needle angle)
function scale(num, in_min, in_max, out_min, out_max) {
    return num * (out_max - out_min) / (in_max - in_min) +out_min;
}


setTime();

setInterval(setTime, 1000);