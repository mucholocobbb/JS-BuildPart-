import {
    mainBlock
} from "./loadScript.js"

const templArr = [
    `<div class="calcDateBlock">
        <form id="datecalc">
            <h3>Калькулятор дат</h3>
            <label for="dateFrom">
                <span>Первая дата:</span>
                <input id="dateFrom" type="date" name="firstDate" />
            </label>
            <label for="dateTo">
                <span>Вторая дата:</span>
                <input id="dateTo" type="date" name="secondDate" />
            </label>
            <button type="submit">Расчитать промежуток</button>
            <p id="datecalc__result"></p>
        </form>
    </div>`,
    `<div class="timerBlock blockHidden">
        <input class="timerInput" id="timer" type="number">
        <span>sec</span>
        <div class="timerBtn ">
            <button id="start" class="btnStyle">Start</button>
            <button id="stop" class="btnStyle">Stop</button>
        </div>
    </div>`
]

export function getTemlate() {
    templArr.forEach(el => {
        mainBlock.insertAdjacentHTML('afterbegin', el)
    })
}