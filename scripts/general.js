import {soonConcertConfig} from "../config/soonConcertConfig.js";

const generalButton = document.getElementById('generalButtonToSale');
const { byeLink } = soonConcertConfig;

generalButton.href = byeLink;