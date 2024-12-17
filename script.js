let pre = document.getElementById('pre');
let container = document.getElementById('container');

setTimeout(function preLoader() {
    pre.style.display = 'none';
    container.style.display = 'block';
}, 5000);


const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    hamburger.classList.toggle("toggle");
});


let mouseCursor = document.querySelector('.cursor');
let mousedot = document.querySelector('.dot');
let d = document.querySelectorAll('.d');

window.addEventListener('mousemove', cursor);
window.addEventListener('mousemove', dot);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

function dot(e) {
    mousedot.style.top = e.pageY + 'px';
    mousedot.style.left = e.pageX + 'px';
}

d.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('dcur')
    })
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('dcur')
    })
})

function show1() {
    document.getElementById('show').src = 'img/Python.svg';
    text.innerHTML = "Python Programming";
}
function show2() {
    document.getElementById('show').src = 'img/html.svg';
    text.innerHTML = "PHypertext Markup Language (HTML)";
}
function show3() {
    document.getElementById('show').src = 'img/css.svg';
    text.innerHTML = "Cascading Style Sheets (CSS)";
}
function show4() {
    document.getElementById('show').src = 'img/js.svg';
    text.innerHTML = "Javascript (JS)";
}
function show5() {
    document.getElementById('show').src = 'img/scratch.svg';
    text.innerHTML = "Scratch";
}
function show6() {
    document.getElementById('show').src = 'img/unity.svg';
    text.innerHTML = "Game Dev (Unity)";
}

window.onload = show1;