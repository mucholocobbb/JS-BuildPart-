import {
    checkBtns,
    calcDataBlock,
    timerBlock,
    startBtn,
    stopBtn
} from "./main.js";

export function checkBlock() {
    checkBtns.addEventListener('click', (event) => {
        for (let i = 0; i < checkBtns.children.length; i++) {
            checkBtns.children[i].classList.remove('btnActive')
        }
        switch (event.target.innerText) {
            case "CalcDate":
                calcDataBlock.classList.remove('blockHidden')
                timerBlock.classList.add('blockHidden')
                event.target.classList.add('btnActive')
                break;
            case "Timer":
                calcDataBlock.classList.add('blockHidden')
                timerBlock.classList.remove('blockHidden')
                event.target.classList.add('btnActive')

                break;

        }
    })

}


function markBtn() {
    console.log(checkBtns);
}