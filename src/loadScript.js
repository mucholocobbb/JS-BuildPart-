export function loadScript(url) {
    const element = document.createElement("script");
    element.defer;
    element.type = "text/javascript";
    element.src = url;

    // document.head.appendChild(element);
    console.log(element);
}