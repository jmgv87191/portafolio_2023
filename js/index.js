let elementos_navegacion = document.querySelectorAll('.nav li a');

let sections = {
    home: document.querySelector('#home'),
    about: document.querySelector('#about'),
    services: document.querySelector('#services'),
    portfolio: document.querySelector('#portfolio'),
    contact: document.querySelector('#contact')
};

var typed = new Typed(".typing", {
    strings: ["", "Web Designer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

function cambiarColor(elemento) {
    for (let el of elementos_navegacion) {
        el.classList.remove("active");
    }

    for (let section in sections) {
        sections[section].classList.add("hidden");
    }

    let sectionId = elemento.getAttribute("href").substring(1); // Obtener el ID de la sección
    sections[sectionId].classList.remove("hidden");
    elemento.classList.add("active");
}
