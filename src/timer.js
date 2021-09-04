const inp = document.getElementById('timer');
export const start = document.getElementById('start');
export const stop = document.getElementById('stop');


let interval

export function timerInit() {
    interval = setInterval(function timer() {
        if (inp.value > 0) {
            inp.value--
        }
    }, 1000)
}

export function stopTimer() {
    clearInterval(interval);
}