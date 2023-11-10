const menuButton = document.getElementById('burger');
const menu = document.getElementById('side-menu');
const wrapper = document.getElementById('nav-wrapper');

let isVisible = false;
menu.style.display = 'none';

const menuVisibleHandler = () => {
    if (!isVisible) {
        wrapper.style.display = 'block';
        menu.style.display = 'block';
        setTimeout(() => menu.style.transform = 'translate(-300px,0)', 0);
        isVisible = !isVisible;
    } else {
        wrapper.style.display = 'none';
        menu.style.transform = 'translate(300px,0)';
        isVisible = !isVisible;
    }
}

menuButton.addEventListener('click', () => menuVisibleHandler());

menu.onclick = (e) => {
    if(e.target.matches('a')) {
        menuButton.onclick(e);
        menuVisibleHandler();
    }
}