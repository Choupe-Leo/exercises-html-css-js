const btn = document.getElementById('btn');
const container = document.querySelector('.notif-container');

const types = ['success', 'error'];

btn.addEventListener('click', getNotification);

function getNotification() {
    const notifications = document.createElement('div');
    notifications.classList.add('notification');

    let resultOfType = getRandomType();

    notifications.innerText = resultOfType === 'success' ? "Soumis avec succès" : "Une erreur s'est produite";
    notifications.style.color = resultOfType === 'success' ? "green" : "red";

    container.appendChild(notifications);

    setTimeout(() => {
        notifications.remove();
    }, 3000);
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}