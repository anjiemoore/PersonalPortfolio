// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuInfo = document.querySelector('.menu-info');
const menuNav = document.querySelector('.menu-nav');

const navItem = document.querySelectorAll('.nav-item');

// State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuInfo.classList.add('show');
        navItem.forEach(item => item.classList.add('show'));

// Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuInfo.classList.remove('show');
        navItem.forEach(item => item.classList.remove('show'));
    }
}