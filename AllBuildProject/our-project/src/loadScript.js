import {
    getTemlate
} from "./templGen.js"


export function loadScript(url, atr) {
    const element = document.createElement("script");
    if (atr === 1) {
        let test = document.querySelector('.test')
        element.src = url;
        element.integrity = "sha512-dMiBqqEV5i3KqpAdsgQSSZ72DnNib7otY0X+b/Tnn1EmLym1dxuZ19csdZqBnfDniKd9bmNtzStQzuMrIa5Ngw==";
        element.setAttribute("crossorigin", "anonymous");
        element.setAttribute("referrerpolicy", "no-referrer");
        test.replaceWith(element);
    } else if (atr === 2) {
        let test = document.querySelector('.test2')
        element.setAttribute("defer", "");
        element.src = url;
        test.replaceWith(element);
    }

}

export const mainBlock = document.querySelector('.mainTempl');

loadScript('https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.js', 1);
loadScript('https://cdn.jsdelivr.net/npm/luxon@1.25.0/build/global/luxon.min.js', 2);
getTemlate();