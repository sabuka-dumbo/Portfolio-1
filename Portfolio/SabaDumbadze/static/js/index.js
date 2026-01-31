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

document.getElementById("sd1").addEventListener("mouseenter", function() {
    const current_card = document.getElementById("sd1");
    current_card.style.animation = "card_hover_animation_open ease 0.4s";

    current_card.addEventListener("animationend", function() {
        current_card.style.animation = '';
        current_card.style.transform = "scale(1.02)";
        current_card.style.boxShadow = "0px 0px 25px gray";
    })
})

document.getElementById("sd1").addEventListener("mouseleave", function() {
    const current_card = document.getElementById("sd1");
    current_card.style.animation = "card_hover_animation_close ease 0.4s";

    current_card.addEventListener("animationend", function() {
        current_card.style.animation = '';
        current_card.style.transform = '';
        current_card.style.boxShadow = '';
    })
})

document.getElementById("sd2").addEventListener("mouseenter", function() {
    const current_card = document.getElementById("sd2");
    current_card.style.animation = "card_hover_animation_open ease 0.4s";

    current_card.addEventListener("animationend", function() {
        current_card.style.animation = '';
        current_card.style.transform = "scale(1.02)";
        current_card.style.boxShadow = "0px 0px 25px gray";
    })
})

document.getElementById("sd2").addEventListener("mouseleave", function() {
    const current_card = document.getElementById("sd2");
    current_card.style.animation = "card_hover_animation_close ease 0.4s";

    current_card.addEventListener("animationend", function() {
        current_card.style.animation = '';
        current_card.style.transform = '';
        current_card.style.boxShadow = '';
    })
})

document.getElementById("sd3").addEventListener("mouseenter", function() {
    const current_card = document.getElementById("sd3");
    current_card.style.animation = "card_hover_animation_open ease 0.4s";

    current_card.addEventListener("animationend", function() {
        current_card.style.animation = '';
        current_card.style.transform = "scale(1.02)";
        current_card.style.boxShadow = "0px 0px 25px gray";
    })
})

document.getElementById("sd3").addEventListener("mouseleave", function() {
    const current_card = document.getElementById("sd3");
    current_card.style.animation = "card_hover_animation_close ease 0.4s";

    current_card.addEventListener("animationend", function() {
        current_card.style.animation = '';
        current_card.style.transform = '';
        current_card.style.boxShadow = '';
    })
})

document.getElementById("sd4").addEventListener("mouseenter", function() {
    const current_card = document.getElementById("sd4");
    current_card.style.animation = "card_hover_animation_open ease 0.4s";

    current_card.addEventListener("animationend", function() {
        current_card.style.animation = '';
        current_card.style.transform = "scale(1.02)";
        current_card.style.boxShadow = "0px 0px 25px gray";
    })
})

document.getElementById("sd4").addEventListener("mouseleave", function() {
    const current_card = document.getElementById("sd4");
    current_card.style.animation = "card_hover_animation_close ease 0.4s";

    current_card.addEventListener("animationend", function() {
        current_card.style.animation = '';
        current_card.style.transform = '';
        current_card.style.boxShadow = '';
    })
})

document.getElementById("sd5").addEventListener("mouseenter", function() {
    const current_card = document.getElementById("sd5");
    current_card.style.animation = "card_hover_animation_open ease 0.4s";

    current_card.addEventListener("animationend", function() {
        current_card.style.animation = '';
        current_card.style.transform = "scale(1.02)";
        current_card.style.boxShadow = "0px 0px 25px gray";
    })
})

document.getElementById("sd5").addEventListener("mouseleave", function() {
    const current_card = document.getElementById("sd5");
    current_card.style.animation = "card_hover_animation_close ease 0.4s";

    current_card.addEventListener("animationend", function() {
        current_card.style.animation = '';
        current_card.style.transform = '';
        current_card.style.boxShadow = '';
    })
})

document.getElementById("sd6").addEventListener("mouseenter", function() {
    const current_card = document.getElementById("sd6");
    current_card.style.animation = "card_hover_animation_open ease 0.4s";

    current_card.addEventListener("animationend", function() {
        current_card.style.animation = '';
        current_card.style.transform = "scale(1.02)";
        current_card.style.boxShadow = "0px 0px 25px gray";
    })
})

document.getElementById("sd6").addEventListener("mouseleave", function() {
    const current_card = document.getElementById("sd6");
    current_card.style.animation = "card_hover_animation_close ease 0.4s";

    current_card.addEventListener("animationend", function() {
        current_card.style.animation = '';
        current_card.style.transform = '';
        current_card.style.boxShadow = '';
    })
})

const burger_menu_div = document.getElementById("navbar-burger");
const navbar_navs2_div = document.getElementById("navbar-navs");
const burger_span1 = document.getElementById("span1");
const burger_span2 = document.getElementById("span2");
const burger_span3 = document.getElementById("span3");

let cooldown2 = true;
let open = false;

burger_menu_div.addEventListener("click", function() {
    if (cooldown2 == true) {
        if (open == false) {
            cooldown2 = false;
            navbar_navs2_div.style.display = "block";
            navbar_navs2_div.style.animation = "navbar_nav2_open 1s ease";
            burger_span1.style.animation = "span1_open ease 1s";
            burger_span2.style.animation = "span2_open ease 1s";
            burger_span3.style.animation = "span3_open ease 1s";

            navbar_navs2_div.addEventListener("animationend", function() {
                navbar_navs2_div.style.animation = '';
                navbar_navs2_div.style.left = "0%";
                navbar_navs2_div.style.display = "block";

                burger_span1.style.animation = '';
                burger_span2.style.animation = '';
                burger_span3.style.animation = '';

                burger_span1.style.top = "13.5px";
                burger_span3.style.top = "-13.5px";
                
                burger_span2.style.opacity = "0";

                burger_span1.style.rotate = "45deg";
                burger_span3.style.rotate = "-45deg";


                cooldown2 = true;
                open = true;
            })
        } else {
            cooldown2 = false;
            navbar_navs2_div.style.display = "block";
            navbar_navs2_div.style.animation = "navbar_nav2_close 1s ease";
            burger_span1.style.animation = "span1_close ease 1s";
            burger_span2.style.animation = "span2_close ease 1s";
            burger_span3.style.animation = "span3_close ease 1s";

            navbar_navs2_div.addEventListener("animationend", function() {
                navbar_navs2_div.style.animation = '';
                navbar_navs2_div.style.left = "";
                navbar_navs2_div.style.display = "none";

                burger_span1.style.animation = '';
                burger_span2.style.animation = '';
                burger_span3.style.animation = '';

                burger_span1.style.top = "0px";
                burger_span3.style.top = "0px";
                
                burger_span2.style.opacity = "1";

                burger_span1.style.rotate = "0deg";
                burger_span3.style.rotate = "0deg";


                cooldown2 = true;
                open = false;
            })
        }
    }
})