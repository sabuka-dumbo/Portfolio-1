const navbar = document.getElementById("navbar");

navbar.style.animation = "navbar_animation_open 1.2s ease";

navbar.addEventListener("animationend", function() {
    navbar.style.animation = '';
})