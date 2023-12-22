let elementos_navegacion = document.querySelectorAll('.nav li a')
let home = document.querySelector('#home')
let about = document.querySelector('#about')
let services = document.querySelector('#services')
let portfolio = document.querySelector('#portfolio')
let contact = document.querySelector('#contact')



var typed = new Typed(".typing",{
    strings:["","Web Designer","Web Developer","juan","manuel"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})


function cambiarColor(elemento){

    for (let i = 0; i < elementos_navegacion.length; i++) {
        elementos_navegacion[i].classList.remove("active")
    }

    if (elemento.href === "http://127.0.0.1:5500/index.html#home") {
        home.classList.remove("hidden")
        about.classList.add("hidden")
        services.classList.add("hidden")
        portfolio.classList.add("hidden")
        contact.classList.add("hidden")
    }

    if (elemento.href === "http://127.0.0.1:5500/index.html#about") {
        home.classList.add("hidden")
        about.classList.remove("hidden")
        services.classList.add("hidden")
        portfolio.classList.add("hidden")
        contact.classList.add("hidden")
    }

    if (elemento.href === "http://127.0.0.1:5500/index.html#services") {
        home.classList.add("hidden")
        about.classList.add("hidden")
        services.classList.remove("hidden")
        portfolio.classList.add("hidden")
        contact.classList.add("hidden")
    }

    if (elemento.href === "http://127.0.0.1:5500/index.html#portfolio") {
        home.classList.add("hidden")
        about.classList.add("hidden")
        services.classList.add("hidden")
        portfolio.classList.remove("hidden")
        contact.classList.add("hidden")
    }

    if (elemento.href === "http://127.0.0.1:5500/index.html#contact") {
        home.classList.add("hidden")
        about.classList.add("hidden")
        services.classList.add("hidden")
        portfolio.classList.add("hidden")
        contact.classList.remove("hidden")
    }



    elemento.classList.add("active")

}