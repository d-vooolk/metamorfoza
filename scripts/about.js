const showButton = document.getElementById('about-read-more');
const hideButton = document.getElementById('about-hide-more-info');
const infoContainer = document.getElementById('about-more-info');
const aboutReadMoreMobile = document.getElementById('about-read-more-mobile');
const aboutPuzzles = document.getElementById('aboutPuzzles');

showButton.onclick = () => {
    infoContainer.style.display = 'block';
    showButton.style.display = 'none';
}

hideButton.onclick = () => {
    infoContainer.style.display = 'none';
    showButton.style.display = 'block';
    aboutPuzzles.style.display = 'none';
    aboutReadMoreMobile.style.display = 'block';
    document.getElementById('about-section').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}

aboutReadMoreMobile.onclick = () => {
    aboutReadMoreMobile.style.display = 'none';
    aboutPuzzles.style.display = 'flex';
    infoContainer.style.display = 'block';
}