import {pastEventsConfig} from "../config/pastEventsConfig.js";
import {baseImagesUrl} from "./utils.js";
import {MAX_PAST_EVENTS, MODAL_TYPE_PAST_EVENTS} from "./constants.js";
import {modalHandler} from "./modal.js";

const pastEventsContainer = document.getElementById('pastEventsList');
let maxElements = MAX_PAST_EVENTS;
const moreEventButtonLayout = `
            <button class="button-show-more-past-events button-sale button-sale-color long-button"
                    id="pastEventsShowMoreButton">
                <span>Показать больше</span>
            </button>`;

const getPastEventsLayout = () => {
    const eventLayout = (data, id) => `
                <div class="past-event">
                    <img src="${baseImagesUrl}${data.img}" alt="прошедшие события"/>
                    <button class="button-sale button-sale-color button-past-event long-button" id="${id}">
                        <span>Подробнее</span>
                    </button>
                    <div class="past-event-info">${data.date}</div>
                </div>`;

    let resultLayout = '';
    for (let i = 0; i < maxElements; i++) {
        resultLayout += eventLayout(pastEventsConfig[i], i);
    }

    if (maxElements !== pastEventsConfig.length) {
        resultLayout += moreEventButtonLayout;
    }

    pastEventsContainer.innerHTML = resultLayout;
};

const showMoreHandler = (e) => {
    let button;
    if (e.target.localName === 'span') {
        button = e.target.parentElement;
    } else {
        button = e.target;
    }
    const targetObject = button.id;

    modalHandler(null, { type: MODAL_TYPE_PAST_EVENTS, data: pastEventsConfig[targetObject] });
}

const addEventsToButton = () => {
    const buttonPastEvent = document.getElementsByClassName('button-past-event');
    for (let button of buttonPastEvent) {
        button.onclick = (e) => showMoreHandler(e);
    }
}

const render = () => {
    getPastEventsLayout();
    addEventsToButton();
}

render();

const pastEventButton = document.getElementById('pastEventsShowMoreButton');
pastEventButton.onclick = () => {
    maxElements = pastEventsConfig.length;
    render();
}