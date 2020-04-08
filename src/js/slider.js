document.addEventListener("DOMContentLoaded", function () {
    initSlider();
});

function initSlider() {
    const left = document.querySelector(".slider__arrow--left");
    const right = document.querySelector(".slider__arrow--right");
    const items = document.querySelector(".slider__list");

    $('.slider__list').slick({
        prevArrow: $('.slider__arrow--left'),
        nextArrow: $('.slider__arrow--right')
    });

}

// function initSlider() {
//     const left = document.querySelector(".slider__arrow--left");
//     const right = document.querySelector(".slider__arrow--right");
//     const items = document.querySelector(".slider__list");

//     right.addEventListener("click", function (e) {
//         loop("right", e);
//     });

//     left.addEventListener("click", function (e) {
//         loop("left", e);
//     });

//     function loop(direction, e) {
//         e.preventDefault();
//         if (direction === "right") {
//             items.appendChild(items.firstElementChild);
//         } else {
//             items.insertBefore(items.lastElementChild, items.firstElementChild);
//         }
//     }
// }
