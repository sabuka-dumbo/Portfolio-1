function toggleMenu() {
    const navs = document.getElementById('navbar-navs');
    const span1 = document.getElementById('span1');
    const span2 = document.getElementById('span2');
    const span3 = document.getElementById('span3');

    navs.classList.toggle('active');

    if (navs.classList.contains('active')) {
        span1.style.transform = "translateY(9px) rotate(45deg)";
        span2.style.opacity = "0";
        span3.style.transform = "translateY(-9px) rotate(-45deg)";
    } else {
        span1.style.transform = "none";
        span2.style.opacity = "1";
        span3.style.transform = "none";
    }
}

function typeEffect(element, speed) {
    const text = element.innerHTML;
    element.innerHTML = "";
    element.style.width = "auto";
    element.style.borderRight = "3px solid black";

    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            element.append(text.charAt(i));
            i++;
        } else {
            clearInterval(timer);
            element.style.animation = "blink_animation 0.8s infinite";
        }
    }, speed);
}

document.addEventListener("DOMContentLoaded", () => {
    const text1 = document.getElementById("typing-text1");
    const text2 = document.getElementById("typing-text2");
    const burger = document.getElementById("navbar-burger");

    if (burger) {
        burger.addEventListener("click", toggleMenu);
    }

    if (text1 && text2) {
        text1.style.visibility = "visible";
        typeEffect(text1, 50);
        
        setTimeout(() => {
            text1.style.borderRight = "none";
            text1.style.animation = "none";
            text2.style.visibility = "visible";
            typeEffect(text2, 50);
        }, 2000);
    }

    const cards = document.querySelectorAll('.strength-divs');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = "scale(1.02)";
            card.style.transition = "transform 0.3s ease";
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = "scale(1)";
        });
    });
});