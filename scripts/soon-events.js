import { soonEvents } from "../config/soonEventsConfig.js";
import { modalHandler } from "./modal.js";
import {baseImagesUrl} from "./utils.js";
import {MODAL_TYPE_SOON_EVENTS} from "./constants.js";

const PREV = 'prev';
const NEXT = 'next';
const eventsLabel = document.getElementById('events-label');
const prevArrow = document.getElementById('soon-events-arrow-back');
const nextArrow = document.getElementById('soon-events-arrow-next');
const eventsContainer = document.getElementById('events-container');
const showMoreButton = document.getElementById('showMoreButton');
let currentSlide = 0;

const arrowHandler = (type) => {
    let currentArrow = type === 'prev' ? prevArrow : nextArrow;
    if (Object.values(currentArrow.classList).includes('disableArrow')) {
        return null;
    }

    currentSlide = type === 'prev' ? --currentSlide : ++currentSlide;

    render();
}

const showMoreHandler = (e) => {
    let button;
    if (e.target.localName === 'span') {
        button = e.target.parentElement;
    } else {
        button = e.target;
    }
    const targetObject = [button.id.split('-')[1], button.id.split('-')[2]]

    modalHandler(soonEvents[targetObject[0]].events[targetObject[1]], { type: MODAL_TYPE_SOON_EVENTS });
}

const eventLayout = (image, eventName, soloist, conductor, scene, date, time, byeLink, currentSlide, index) => {
    const eventCard = document.createElement('div');
    eventCard.className = "event-card";
    eventCard.innerHTML = `
        <div class="future-event-image-wrapper">
            <img src="${baseImagesUrl}${image}" alt="событие">
        </div>
        <div class="event-info">
            <div class="event-name">
                ${eventName}
            </div>
            <div class="event-participants">
                <div class="event-first-grid">
                    <div class="participant">
                        <span class="participant-role">Солисты</span>
                        <span class="participant-name">${soloist}</span>
                    </div>
                    <div class="participant">
                        <span class "participant-role">Дирижёр</span>
                        <span class="participant-name">${conductor}</span>
                    </div>
                    <div class="participant">
                        <span class="participant-role">Сцена</span>
                        <span class="participant-name">${scene}</span>
                    </div>
                </div>
                <div>
                    <div class="participant">
                        <span class="participant-role">Дата события</span>
                        <span class="participant-name">${date}</span>
                    </div>
                    <div class="participant">
                        <span class="participant-role">Время</span>
                        <span class="participant-name">${time}</span>
                    </div>
                    <div class="event-buttons-wrapper">
                        <a href="${byeLink}" target="_blank noopener noreferer"><button class="button-sale button-sale-color"><span>Купить билет</span></button></a>
                        <button class="button-sale moreDetails" id="moreDetails-${currentSlide}-${index}"><span>Подробнее</span></button>
                    </div>
                </div>
            </div>
        </div>
    `;

    return eventCard;
}

const addEventToButtons = () => {
    const buttons = document.getElementsByClassName('moreDetails');
    for (let button of buttons) {
        button.onclick = (e) => showMoreHandler(e);
    }
}

const renderEventsSlider = (showAll = false) => {
    showMoreButton.style.display = 'none';
    let resultLayout = '';
    eventsLabel.textContent = soonEvents[currentSlide].label;

    if (currentSlide === 0) {
        prevArrow.classList.add('disableArrow');
    } else {
        prevArrow.classList.remove('disableArrow');
    }

    if (currentSlide === soonEvents.length - 1) {
        nextArrow.classList.add('disableArrow');
    } else {
        nextArrow.classList.remove('disableArrow');
    }

    soonEvents[currentSlide].events.map((item, index) => {
        if (index >= 3 && !showAll) {
            return;
        }
        const eventCard = eventLayout(
            item.img,
            item.eventName,
            item.soloists,
            item.conductor,
            item.scene,
            item.date,
            item.time,
            item.byeLink,
            currentSlide,
            index
        );
        resultLayout += eventCard.outerHTML;
    });

    if (soonEvents[currentSlide].events.length > 3 && !showAll) {
        showMoreButton.style.display = 'block';
    }

    eventsContainer.innerHTML = resultLayout;
}

prevArrow.onclick = () => arrowHandler(PREV);
nextArrow.onclick = () => arrowHandler(NEXT);
showMoreButton.onclick = () => render(true);


const render = (showAll = false) => {
    renderEventsSlider(showAll);
    addEventToButtons();
}

render();
