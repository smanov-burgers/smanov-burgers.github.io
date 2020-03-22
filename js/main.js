document.addEventListener("DOMContentLoaded", function () {
    const left = document.querySelector(".slider__arrow--left");
    const right = document.querySelector(".slider__arrow--right");
    const items = document.querySelector(".slider__list");

    right.addEventListener("click", function (e) {
        loop("right", e);
    });

    left.addEventListener("click", function (e) {
        loop("left", e);
    });

    function loop(direction, e) {
        e.preventDefault();
        if (direction === "right") {
            items.appendChild(items.firstElementChild);
        } else {
            items.insertBefore(items.lastElementChild, items.firstElementChild);
        }
    }


    const menu_btn = document.querySelector(".hamburger-menu");
    const btn_close = document.querySelector(".btn-close");
    const menu = document.querySelector(".menu");
    const btn_order = document.querySelector("#btn-order");
    const hamburger_menu = document.querySelector(".hamburger-menu");
    const header = document.querySelector(".header");
    menu_btn.addEventListener("click", function (e) {
        e.preventDefault();
        btn_order.classList.add("btn--display-none");
        hamburger_menu.classList.add("hamburger-menu--display-none");
        header.classList.add("header--overlay");
        menu.classList.remove("menu--display-none");
        btn_close.classList.add("btn-close--active");
    });

    btn_close.addEventListener("click", function (e) {
        e.preventDefault();
        btn_order.classList.remove("btn--display-none");
        hamburger_menu.classList.remove("hamburger-menu--display-none");
        header.classList.remove("header--overlay");
        menu.classList.add("menu--display-none");
        btn_close.classList.remove("btn-close--active");
    });

});


