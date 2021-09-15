import {
    sound
} from "./main.js"

const inp = document.getElementById('timer');
export const start = document.getElementById('start');
export const stop = document.getElementById('stop');


let interval
let isPlay = false

export function timerInit() {
    if (!isPlay) {
        isPlay = true
        interval = setInterval(function timer() {
            if (inp.value > 0) {
                inp.value--
            } else if (inp.value == 0) {
                sound.play();
                isPlay = false;
                clearInterval(interval);
            }
        }, 1000)

    }
}

export function stopTimer() {
    isPlay = false
    clearInterval(interval);
}