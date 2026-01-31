const navbar = document.getElementById("navbar");

navbar.style.animation = "navbar_animation_open 1.2s ease";

navbar.addEventListener("animationend", function () {
    navbar.style.animation = '';
});

const burger_menu_div = document.getElementById("navbar-burger");
const navbar_navs2_div = document.getElementById("navbar-navs");
const burger_span1 = document.getElementById("span1");
const burger_span2 = document.getElementById("span2");
const burger_span3 = document.getElementById("span3");

let cooldown2 = true;
let open = false;

burger_menu_div.addEventListener("click", function () {
    if (cooldown2) {
        cooldown2 = false;

        if (!open) {
            navbar_navs2_div.style.display = "block";
            navbar_navs2_div.style.animation = "navbar_nav2_open 1s ease";
            burger_span1.style.animation = "span1_open ease 1s";
            burger_span2.style.animation = "span2_open ease 1s";
            burger_span3.style.animation = "span3_open ease 1s";

            navbar_navs2_div.addEventListener("animationend", function handler() {
                navbar_navs2_div.removeEventListener("animationend", handler);
                navbar_navs2_div.style.animation = '';
                navbar_navs2_div.style.left = "0%";

                burger_span1.style = "top: 13.5px; rotate: 45deg;";
                burger_span2.style.opacity = "0";
                burger_span3.style = "top: -13.5px; rotate: -45deg;";

                cooldown2 = true;
                open = true;
            });
        } else {
            navbar_navs2_div.style.animation = "navbar_nav2_close 1s ease";
            burger_span1.style.animation = "span1_close ease 1s";
            burger_span2.style.animation = "span2_close ease 1s";
            burger_span3.style.animation = "span3_close ease 1s";

            navbar_navs2_div.addEventListener("animationend", function handler() {
                navbar_navs2_div.removeEventListener("animationend", handler);
                navbar_navs2_div.style.animation = '';
                navbar_navs2_div.style.display = "none";
                navbar_navs2_div.style.left = "";

                burger_span1.style = "top: 0px; rotate: 0deg;";
                burger_span2.style.opacity = "1";
                burger_span3.style = "top: 0px; rotate: 0deg;";

                cooldown2 = true;
                open = false;
            });
        }
    }
});
