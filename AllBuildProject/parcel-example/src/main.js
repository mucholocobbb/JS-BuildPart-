@isTestable(true)

// хз почему подчеркивает, все работает,код переводит в ЕС5
class myClass { }

function isTestable(value) {
    return function decorator(target) {
        target.isTestable = value
    }
}

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
import "../media/sound.mp3";
// import "../css/style.css";
import "../css/style.sass";



export const sound = new Howl({
    src: ['media/sound.mp3']
});
export const checkBtns = document.querySelector('.buttons')
export const calcDataBlock = document.querySelector('.calcDateBlock')
export const timerBlock = document.querySelector('.timerBlock')
export const startBtn = document.getElementById('start')
export const stopBtn = document.getElementById('stop')
checkBlock()

dateCalcForm.addEventListener("submit", handleCalcDates);
start.addEventListener("click", timerInit)
stop.addEventListener("click", stopTimer)
