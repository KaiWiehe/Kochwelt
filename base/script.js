async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}

function showMenu() {
    document.getElementById('media-menu').classList.add('show-media-menu');
    document.getElementById('menubutton-1').classList.add('hide');
    document.getElementById('menubutton-2').classList.remove('hide');
}

function hideMenu() {
    document.getElementById('media-menu').classList.remove('show-media-menu');
    document.getElementById('menubutton-1').classList.remove('hide');
    document.getElementById('menubutton-2').classList.add('hide');
}