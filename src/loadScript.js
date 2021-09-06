export function loadScript(url) {
    const element = document.createElement("script");
    // element.type = "text/javascript";
    element.src = url;
    element.integrity = "sha512-dMiBqqEV5i3KqpAdsgQSSZ72DnNib7otY0X+b/Tnn1EmLym1dxuZ19csdZqBnfDniKd9bmNtzStQzuMrIa5Ngw==";
    element.setAttribute("crossorigin", "anonymous");
    element.setAttribute("referrerpolicy", "no-referrer");
    let test = document.querySelector('.test')
    test.replaceWith(element);
    console.log(element);
}