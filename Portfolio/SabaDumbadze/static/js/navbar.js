const navbar = document.getElementById("navbar");

navbar.style.animation = "navbar_animation_open 1.2s ease";
navbar.addEventListener("animationend", () => {
    navbar.style.animation = "";
});

const burger = document.getElementById("navbar-burger");
const navs = document.getElementById("navbar-navs");
const span1 = document.getElementById("span1");
const span2 = document.getElementById("span2");
const span3 = document.getElementById("span3");

let open = false;
let cooldown = true;

burger.addEventListener("click", () => {
    if (!cooldown) return;
    cooldown = false;

    if (!open) {
        navs.classList.add("active");

        span1.style.top = "13.5px";
        span1.style.rotate = "45deg";
        span2.style.opacity = "0";
        span3.style.top = "-13.5px";
        span3.style.rotate = "-45deg";

        open = true;
    } else {
        navs.classList.remove("active");

        span1.style.top = "0px";
        span1.style.rotate = "0deg";
        span2.style.opacity = "1";
        span3.style.top = "0px";
        span3.style.rotate = "0deg";

        open = false;
    }

    setTimeout(() => cooldown = true, 300);
});
