const showButton = document.getElementById('about-read-more');
const hideButton = document.getElementById('about-hide-more-info');
const infoContainer = document.getElementById('about-more-info');

showButton.onclick = () => {
    infoContainer.style.display = 'block';
    showButton.style.display = 'none';
}

hideButton.onclick = () => {
    infoContainer.style.display = 'none';
    showButton.style.display = 'block';
    document.getElementById('about-section').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}