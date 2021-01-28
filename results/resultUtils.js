import { getUserStats } from '../utils/storageUtils.js';
import { renderUserHdr } from '../utils/headerUtil.js';
import { getResult } from './getResult.js';
import { findById } from '../utils/utils.js';
import results from '../data/resultData.js';

const user = getUserStats();
const userResult = getResult(user);

renderUserHdr(user);
const resultInfo = findById(userResult, results);

const resultHeader = document.querySelector('h2');
const resultMsg = document.querySelector('h3');
const resultImg = document.getElementById('result-image');


resultHeader.textContent = resultInfo.title;
resultMsg.textContent = resultInfo.title;
resultImg.src = resultInfo.image;

const resetBtn = document.getElementById('reset');

resetBtn.addEventListener('click', () => {
    window.location = '../index.html';
});