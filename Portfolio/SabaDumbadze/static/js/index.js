const navbar = document.getElementById("navbar");

navbar.style.animation = "navbar_animation_open 1.2s ease";

navbar.addEventListener("animationend", function() {
    navbar.style.animation = '';
})

const info_button = document.getElementById("info-button");

info_button.addEventListener("mouseenter", function() {
    info_button.style.animation = "info_button_hover 0.4s ease";

    info_button.addEventListener("animationend", function() {
        info_button.style.border = "0px solid black";
        info_button.style.boxShadow = "8px 8px black";
        info_button.style.animation = '';
        info_button.style.marginTop = "9px";
    })
})

info_button.addEventListener("mouseleave", function() {
    info_button.style.animation = "info_button_unhover 0.4s ease";

    info_button.addEventListener("animationend", function() {
        info_button.style.border = "5px solid black";
        info_button.style.boxShadow = '';
        info_button.style.animation = '';
        info_button.style.marginTop = '';
    })
})