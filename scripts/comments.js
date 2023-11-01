import {commentsConfig} from "../config/commentsConfig.js";

const commentsContainer = document.getElementById('commentsContainer');

const getCommentsLayout = () => {
    commentsContainer.innerHTML = '';

    commentsContainer.innerHTML = commentsConfig.map(({ name, comment, url }) => `
                <div class="slider-item">
                    <div class="feedback-wrapper">
                        <div class="feedback-header">
                            <div class="feedback-icon">${name[0].toUpperCase()}</div>
                            <div class="feedback-name">
                                <div class="feedback-user-name">${name}</div>
                                <div class="feedback-user-link">
                                    <a href="${url}" target="_blank noopener noreferer">
                                        ${url.split('/')[2]}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="feedback-text">
                            ${comment}
                        </div>
                    </div>
                </div>`).join('');

    commentsContainer.innerHTML += `<div class="slider-item"></div>`;
};

getCommentsLayout();