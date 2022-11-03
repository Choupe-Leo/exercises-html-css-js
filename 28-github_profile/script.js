const APIURL = 'https://api.github.com/users/';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.querySelector('.main');

/*
exécuter async getUser() : exécuter createUserCard() et async getRepos() dedans
-> générer les HTML dans createUserCard()
-> exécuter createRepos() dans async getRepos()
-> générer l'ul repos par createRepos()

ajouter eventlistener submit
*/

async function getUser(username) {
    
    try {
        const { data } = await axios(APIURL + username);
        createUserCard(data);
        getRepos(username);
    } catch(err) {
        if(err.response.status === 404) {
            createErrorCard("Le profil n'existe pas...");
        } else if(err.response.status === 499) {
            createErrorCard("Oops...Votre connexion est coupée");
        }
    }

}

async function getRepos(username) {
    try {
        const { data } = await axios(APIURL + username + '/repos?sort=created_at');
        createRepos(data);
    } catch (err) {
        createErrorCard("Le repo n'est pas disponible...")
    }
}

function createUserCard(userdata) {
    const cardHTML = `<div class="main__card">
            
        <div>
            <img src="${userdata.avatar_url}" alt="avatar" class="main__avatar">
        </div>

        <div class="main__user-info">
            <h2>${userdata.name}</h2>

            <p>${userdata.bio}</p>

            <ul>
                <li>${userdata.followers}<strong>Followers</strong></li>
                <li>${userdata.following}<strong>Following</strong></li>
                <li>${userdata.public_repos}<strong>Repositories</strong></li>
            </ul>

            <div class="main__repos"></div>
            
        </div>

    </div>`

    main.innerHTML = cardHTML;
}

function createErrorCard(err_msg) {
    main.innerHTML= `
        <div class="main__card">${err_msg}</div>
    `;
}

function createRepos(reposdata) {
    const reposEl = document.querySelector('.main__repos');

    reposdata
        .slice(0, 6)
        .forEach(repo => {
            const repoLinkEl = document.createElement('a');
            repoLinkEl.href = repo.html_url;
            repoLinkEl.innerText = repo.name;

            repoLinkEl.target = '_blank';

            repoLinkEl.classList.add('repo');
            reposEl.appendChild(repoLinkEl);
        });
}

form.addEventListener('submit', (e) => {

    e.preventDefault();

    const user = search.value;

    if(user) {
        getUser(user);

        search.value = '';
    }
})