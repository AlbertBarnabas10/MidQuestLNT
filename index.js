const nav = document.querySelector('#nav');

window.addEventListener('scroll', ()=>{
    nav.classList.toggle('shadow', window.scrollY > 0);
});

const logo = document.querySelector('#logo');

window.addEventListener('scroll', ()=>{
    logo.classList.toggle('shadow', window.scrollY > 0);
});

const menu = document.querySelector('#menu');
const navMenu = document.querySelector('.list-menu');

menu.onclick = () =>{
    navMenu.classList.toggle('active');
}

window.onscroll = () =>{
    navMenu.classList.remove('active');
}

