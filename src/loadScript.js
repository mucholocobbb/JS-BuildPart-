import {
    getTemlate
} from "./templGen.js"

function loadScript(url) {
    let test = document.querySelector('.test')
    const element = document.createElement("script");
    element.src = url;
    element.integrity = "sha512-dMiBqqEV5i3KqpAdsgQSSZ72DnNib7otY0X+b/Tnn1EmLym1dxuZ19csdZqBnfDniKd9bmNtzStQzuMrIa5Ngw==";
    element.setAttribute("crossorigin", "anonymous");
    element.setAttribute("referrerpolicy", "no-referrer");
    test.replaceWith(element);
    console.log(element);
}

export const mainBlock = document.querySelector('.mainTempl');

loadScript('https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.js');
getTemlate();