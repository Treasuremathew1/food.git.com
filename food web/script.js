let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let btn = document.querySelector('.btn');
let container = document.querySelector('.container');
let close = document.querySelector('#close');

menu.addEventListener('click', () =>{
    navbar.classList.toggle('active');
    container.classList.remove('active');
});

window.addEventListener('scroll',() => {
    navbar.classList.remove('active')
})

window.addEventListener('scroll', scrollTo)

btn.addEventListener('click', ()=>{
    container.classList.toggle('active');
    navbar.classList.remove('active');
});

document.querySelector('#close').onclick = () => {
    container.classList.toggle('active');
};

document.querySelector('.btn').onclick = () => {
    close.classList.remove('active');
};


function box(){
    window.location.href="login.html";
}