import {galleryConfig} from "../config/galleryConfig.js";
import {baseImagesUrl} from "./utils.js";

const galleryContainer = document.getElementById('galleryContainer');
const galleryImagesUrl = baseImagesUrl + '/gallery/';

const getGalleryLayout = () => {
    galleryContainer.innerHTML = galleryConfig.map(imageName => `
                    <div class="slider-item">
                        <div class="image-wrapper">
                            <img class="image" src="${galleryImagesUrl}${imageName}" alt="video">
                        </div>
                    </div>`).join('');

    galleryContainer.innerHTML += `
                    <div class="slider-item">
                        <div></div>
                    </div>`;
};

getGalleryLayout();