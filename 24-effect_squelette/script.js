const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const userName = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 3000);

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="">';
    title.innerHTML = 'Title ipsum dolor sit amet.';
    excerpt.innerHTML = 'Paragraph ipsum dolor sit amet consectetur, adipisicing elit. Eum, nobis';
    profile_img.innerHTML = '<img src="http://randomuser.me/api/portraits/men/45.jpg" alt="">';
    userName.innerHTML = 'John Doe';
    date.innerHTML = 'Oct 09, 2022';

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
    animated_bg_texts.forEach(text => text.classList.remove('animated-bg-text'));
}