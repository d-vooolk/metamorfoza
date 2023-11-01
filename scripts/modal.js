import {MODAL_TYPE_PAST_EVENTS} from "./constants.js";

const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('closeModalButton');
const modalContainer = document.getElementById('modalContainer');

const modalImage = (data, baseUrl) => `
                <div class="modal-image">
                    <img src="${baseUrl}${data?.img}" alt="modalEvent" />
                </div>`;
const modalHeadText = (data) => `<h2 class="modal-head-text">${data?.eventName}</h2>`;
const modalDateTime = (data, isShowBlock) => `<div class="modal-datetime">${isShowBlock ? `${data?.date} | ${data?.time}` : `${data.date}`}</div>`;
const modalOtherDetails = (data, isShowScene, isFullVersion) => `
                    <div class="modal-other-details">
                        <div class="artists">
                            ${isFullVersion ? `<div class="modal-participants"><span class="modal-participants-b">Дирижёр</span> — ${data?.conductor}, <span class="modal-participants-b">солисты</span> — ${data?.soloists}</div>` : ''}
                            ${isShowScene ? `<div class="modal-place">${data?.scene}</div>` : ''}
                        </div>
                        ${isFullVersion 
                            ? `<a href="${data?.byeLink}" target="_blank noopener noreferer">
                                <button class="button-sale button-sale-color modal-button"><span>Купить билет</span></button>
                              </a>` 
                            : ''
                        }
                    </div>`;
const customHr = () => `<hr class="margin-bottom-40 custom-hr" />`;
const modalDescriptionTitle = (data) => `<div class="modal-description-title">${data?.moreInfoHeader}</div>`;
const modalDescription = (data) => `<div class="modal-description">${data?.moreInfo}</div>`;
const modalTextContent = (layout) => `<div class="modal-text-content">${layout}</div>`;
const modalContent = (layout) => `<div class="modalContent">${layout}</div>`;


export const modalHandler = (config, otherConfig) => {
    const { type, data, url } = otherConfig;
    const modalContentArray = [];
    const modalTextContentArray = [];

    modalContentArray.push(modalImage(config || data, url));

    if (type !== MODAL_TYPE_PAST_EVENTS) {
        modalTextContentArray.push(modalHeadText(config || data));
    }

    if (config || type === MODAL_TYPE_PAST_EVENTS) {
        modalTextContentArray.push(modalDateTime(config || data, type !== MODAL_TYPE_PAST_EVENTS));
    }

    modalTextContentArray.push(modalOtherDetails(config || data, Boolean(config), type !== MODAL_TYPE_PAST_EVENTS));
    modalTextContentArray.push(customHr());

    if (config) {
        modalTextContentArray.push(modalDescriptionTitle(config));
    }

    modalTextContentArray.push(modalDescription(config || data));

    modalContentArray.push(modalTextContent(modalTextContentArray.join('')));

    modalContainer.innerHTML = modalContent(modalContentArray.join(''));
    modal.style.display = 'block';
}

closeModalButton.onclick = () => modal.style.display = 'none';