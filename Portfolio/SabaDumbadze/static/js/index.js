const navbar = document.getElementById("navbar");

navbar.style.animation = "navbar_animation_open 1.2s ease";

navbar.addEventListener("animationend", function() {
    navbar.style.animation = '';
})

const info_button = document.getElementById("info-button");
let cooldown = 0;

info_button.addEventListener("mouseenter", function() {
    if (cooldown == 0) {
        cooldown = 1;
        info_button.style.animation = "info_button_hover 0.2s ease";

        info_button.addEventListener("animationend", function() {
            info_button.style.border = "0px solid black";
            info_button.style.boxShadow = "8px 8px black";
            info_button.style.animation = '';
            info_button.style.marginTop = "9px";

            cooldown = 0;
        })
    }
})

info_button.addEventListener("mouseleave", function() {
    if (cooldown == 0) {
        cooldown = 1;

        info_button.style.animation = "info_button_unhover 0.2s ease";

        info_button.addEventListener("animationend", function() {
            info_button.style.border = "5px solid black";
            info_button.style.boxShadow = '';
            info_button.style.animation = '';
            info_button.style.marginTop = '';

            cooldown = 0;
        })
    }
})

const typing_text1 = document.getElementById("typing-text1");
const typing_text2 = document.getElementById("typing-text2");

addEventListener("DOMContentLoaded", function() {
    typing_text1.style.animation = "typing_animation 2s steps(30) 01s 1 normal both";
    typing_text2.style.opacity = '0';
    
    this.setTimeout(function() {
        typing_text1.style.borderRight = 'none';
        typing_text2.style.opacity = '1';
        typing_text2.style.animation = "typing_animation 2s steps(30) 1s 1 normal both";

        typing_text2.addEventListener("animationend", function() {
            typing_text1.style.width = "100%";
            typing_text2.style.width = "100%";
            typing_text2.style.animation = "blink_animation 1s step-end infinite 1s";
        })
    }, 2000)
})