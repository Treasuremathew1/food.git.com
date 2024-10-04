let btn = document.querySelector('.btn');
let container = document.querySelector('.container');

btn.addEventListener('click', () =>{
    container.classList.toggle('active');
});




let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let close = document.querySelector('#close');


menu.addEventListener('click', () =>{
    navbar.classList.toggle('active');
    container.classList.remove('active');
});

function back(){
    window.location.href="index.html"
}
