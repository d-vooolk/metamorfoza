import {recordsConfig} from "../config/recordsConfig.js";
import {baseImagesUrl} from "./utils.js";
import {MAX_RECORDS} from "./constants.js";

const recordsContainer = document.getElementById('recordsContainer');
let maxRecords = MAX_RECORDS;
const recordsImagesUrl = baseImagesUrl + '/records/';

const getRecordsLayout = () => {
    recordsContainer.innerHTML = '';
    for (let i = 0; i < maxRecords; i++) {
        recordsContainer.innerHTML += `
                <div class="record">
                    <img src="${recordsImagesUrl}${recordsConfig[i]?.img}" alt="записи" class="record-img"/>
                    <div class="record-name">${recordsConfig[i]?.name}</div>
                    <div class="record-author">${recordsConfig[i]?.artists}</div>
                    <div class="record-author">${recordsConfig[i]?.ean}</div>
                    <div class="record-author">${recordsConfig[i]?.totalLength}</div>
                    <div class="listen-record">Слушать на площадках</div>
                    <div class="social-icons-list-wrapper">
                        ${recordsConfig[i]?.spotify ? `<a href="${recordsConfig[i]?.spotify}" target="_blank noopener noreferer" class="records-link">
                            <div class="record-in-social">
                                <img src="images/icons/spotify-color.svg" alt="spotyfy">
                                <div class="social-description">Spotyfy</div>
                            </div>
                        </a>` : ''}
                        ${recordsConfig[i]?.zvuk ? `<a href="${recordsConfig[i]?.zvuk}" target="_blank noopener noreferer" class="records-link">
                            <div class="record-in-social">
                                <img src="images/icons/zvuk.svg" alt="zvuk">
                                <div class="social-description">Zvuk</div>
                            </div>
                        </a>` : ''}
                        ${recordsConfig[i]?.yandex ? `<a href="${recordsConfig[i]?.yandex}" target="_blank noopener noreferer" class="records-link">
                            <div class="record-in-social">
                                <img src="images/icons/yandex-music.svg" alt="yandex">
                                <div class="social-description">Yandex</div>
                            </div>
                        </a>` : ''}
                        ${recordsConfig[i]?.youtube ? `<a href="${recordsConfig[i]?.youtube}" target="_blank noopener noreferer" class="records-link">
                            <div class="record-in-social">
                                <img src="images/icons/youtube-music.svg" alt="youtube">
                                <div class="social-description">Youtube</div>
                            </div>
                        </a>` : ''}
                    </div>
                </div>`
    }

    if (maxRecords !== recordsConfig.length) {
        recordsContainer.innerHTML += `
                <button class="button-show-more-past-events button-sale button-sale-color long-button" id="showMoreRecords">
                    <span>Показать больше</span>
                </button>`;
    }
};

getRecordsLayout();

const moreRecordsButton = document.getElementById('showMoreRecords');
moreRecordsButton.onclick = () => {
    maxRecords = recordsConfig.length;
    moreRecordsButton.style.display = 'none';
    getRecordsLayout();
}

