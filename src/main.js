import {
    handleCalcDates,
    dateCalcForm
} from "./dcMain.js";
import {
    checkBlock
} from "./checkItem.js";
import {
    timerInit,
    stopTimer,
    start,
    stop
} from "./timer.js";

export const checkBtns = document.querySelector('.buttons')
export const calcDataBlock = document.querySelector('.calcDateBlock')
export const timerBlock = document.querySelector('.timerBlock')
export const startBtn = document.getElementById('start')
export const stopBtn = document.getElementById('stop')
checkBlock()

dateCalcForm.addEventListener("submit", handleCalcDates);
start.addEventListener("click", timerInit)
stop.addEventListener("click", stopTimer)