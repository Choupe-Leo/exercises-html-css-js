const tagsEl = document.createElement('div');
tagsEl.classList.add('tags');
document.querySelector('.container').appendChild(tagsEl);

const textArea = document.getElementById('txt');


textArea.focus();

// 1. get txt when it's added to txtarea
textArea.addEventListener('keyup', (event) => {
    createTags(event.target.value);

    if(event.key === 'Enter') {
        setTimeout(() => {
            event.target.value = '';
        }, 10);

        randomSelect();
    }
})

// 2. turn txt into an array
function createTags(input) {
    const tags = input.split(';')
    .filter(tag => tag.trim() !== '') // tag value should not be empty
    .map(tag => tag.trim()); // remove whitespace from both end of tag string

    tagsEl.innerHTML = ''; // clear every keyup, avoid strings piled up

// 3. turn every element of array into span
    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagsEl.appendChild(tagEl);
        tagEl.innerText = tag;
    })
    
}

// 4. create random select function
function randomSelect() {
    const times = 30;
    
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        highlightTag(randomTag);

        setTimeout(() => {unHighlightTag(randomTag)}, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval);
        // const randomTag = pickRandomTag();
        // highlightTag(randomTag);

        setTimeout(() => {
            const randomTag = pickRandomTag();

            highlightTag(randomTag);
        } ,100)

    }, times * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
    tag.classList.add('highlight');
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight');
}