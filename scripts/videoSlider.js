import {videoSliderConfig} from "../config/videoSliderConfig.js";

const videoSliderContainer = document.getElementById('videoSliderContainer');

const getVideoLayout = () => {
    videoSliderContainer.innerHTML = '';
    videoSliderContainer.innerHTML += videoSliderConfig.map(video => `
                <div class="slider-item">
                    <div>
                        <iframe src="https://www.youtube.com/embed/${video.link.split('=')[1].split('&')[0]}" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div class="video-text">
                        <span class="video-title">${video?.header}</span>
                        <span class="video-description">${video?.description}</span>
                    </div>
                </div>`).join('');

    videoSliderContainer.innerHTML += `
                <div class="slider-item">
                    <div></div>
                </div>`;
};

getVideoLayout();