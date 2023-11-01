import {soonConcertConfig} from "../config/soonConcertConfig.js";
import {modalHandler} from "./modal.js";
import {baseImagesUrl} from "./utils.js";
import {MODAL_TYPE_SOON_CONCERT} from "./constants.js";

const firstBlock = document.getElementById('concerts-section');
const secondBlock = document.getElementById('soon-concert-double');

const { img, eventName, soloists, conductor, byeLink } = soonConcertConfig;

const getSoonConcertLayout = () => {
    const layout = `
        <div class="add-event-wrapper">
            <h2 class="head-text">БЛИЖАЙШИЙ КОНЦЕРТ</h2>
            <div class="soon-event-content">
                <img src="${baseImagesUrl}${img}" alt="ближайший концерт"/>
                <div class="soon-event-text-wrapper">
                    <div class="soon-event-title">${eventName}</div>
                    <div class="event-participants margin-bottom-20 soon-event-participants">
                        <div class="participant-role">Солисты</div>
                        <div class="participant-name">${soloists}</div>
                    </div>
                    <div class="event-participants margin-bottom-40 soon-event-participants">
                        <div class="participant-role">Дирижёр</div>
                        <div class="participant-name">${conductor}</div>
                    </div>
                    <div class="event-buttons-wrapper">
                        <a href="${byeLink}" target="_blank noopener noreferer" class="soon-concert-bye-button">
                            <button class="button-sale-color button-sale"><span>Купить билет</span></button>
                        </a>
                        <button class="button-sale moreButtonSoonConcert" id="moreButtonSoonConcert"><span>Подробнее</span></button>
                    </div>
                </div>
            </div>
        </div>`;

    firstBlock.innerHTML = layout;
    secondBlock.innerHTML = layout;
};

const addEventToMoreButton = () => {
    const moreButton = document.getElementsByClassName('moreButtonSoonConcert');
    for (let button of moreButton) {
        button.onclick = () => modalHandler(null, { type: MODAL_TYPE_SOON_CONCERT, data: soonConcertConfig});
    }
}

getSoonConcertLayout();
addEventToMoreButton();