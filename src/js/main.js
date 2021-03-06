document.addEventListener("DOMContentLoaded", function () {
        
    initCloseOverlay();
    initNav();
    initMenu();
    initTeam();
    initReviews();
    initOrder();
    
});


function initNav() {

    const menu_btn = document.querySelector(".hamburger-menu");
    const btn_close = document.querySelector(".btn-close");
    const header = document.querySelector(".header");
    menu_btn.addEventListener("click", function (e) {
        e.preventDefault();
        header.classList.toggle("header--overlay");
    });

    btn_close.addEventListener("click", function (e) {
        e.preventDefault();
        header.classList.toggle("header--overlay");
    });

    $('.menu__item').on('click', function (e) {
        header.classList.remove("header--overlay");
    });
}

function initTeam() {

    const teamacc = document.querySelector(".teamacc");
    let lastActive = document.querySelector(".teamacc-item--selected");

    teamacc.addEventListener("click", function (e) {
        e.preventDefault();
        var sameLast = false;
        if (e.target.classList.contains("teamacc-item__title")) {
            if (lastActive) {
                var liElem = e.target.classList.contains("teamacc-item") ? e.target : e.target.closest(".teamacc-item");

                sameLast = liElem.classList.contains("teamacc-item--selected");
                lastActive.classList.remove("teamacc-item--selected");
            }

            if(!sameLast)
            {
                lastActive = e.target.parentNode;
                lastActive.classList.add("teamacc-item--selected");
            }
            
        }
    });
}

function initMenu() {

    const menuacc = document.querySelector(".menuacc__list");
    let lastActive;

    menuacc.addEventListener("click", function (e) {
        e.preventDefault();
        if (e.target.classList.contains("menuacc__title") || hasSomeParentWithClass(e.target, "menuacc__title")) {
            var sameLast = false;
            if (lastActive) {
                sameLast = lastActive.classList.contains("menuacc__elem--active");
                lastActive.classList.remove("menuacc__elem--active");
            }

            var titleElem = e.target.classList.contains("menuacc__elem") ? e.target : e.target.closest(".menuacc__elem");

            if (lastActive != titleElem || !sameLast) {
                lastActive = titleElem;
                lastActive.classList.add("menuacc__elem--active");
            }

        }
    });
}

function initReviews() {
    const reviewList = document.querySelector(".reviews__list");

    reviewList.addEventListener("click", function (e) {
        e.preventDefault();
        if (e.target.classList.contains("btn")) {
            const overlayElement = document.querySelector(".overlay");

            reviewList.addEventListener("click", function () {
                var contentNode = overlayElement.querySelector(".overlay__content-wrapper")
                contentNode.innerHTML = '';

                var titleNode = document.createElement("div");
                titleNode.innerHTML = e.target.parentNode.querySelector(".review__username").innerHTML;
                titleNode.classList.add('review__username');
                titleNode.classList.add('review__username--overlay');

                contentNode.appendChild(titleNode);

                var textNode = document.createElement("div");
                textNode.innerHTML = e.target.parentNode.querySelector(".review__content").innerHTML;
                textNode.classList.add('review__content');
                textNode.classList.add('review__content--overlay');

                contentNode.appendChild(textNode);

                overlayElement.style.display = "flex";
            });

        }
    });



}

function initOrder() {
    const myForm = document.querySelector('#order-form');
    const send = document.querySelector("#order");

    send.addEventListener('click', event => {
        event.preventDefault();
        var formData = new FormData();
        formData.append(myForm.elements.name.name, myForm.elements.name.value);
        formData.append(myForm.elements.phone.name, myForm.elements.phone.value);
        formData.append(myForm.elements.to.name, myForm.elements.to.value);
        formData.append(myForm.elements.comment.name, myForm.elements.comment.value);
     
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('load', () => {
            displayResponse(xhr.status);
        });
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.responseType = "json";
        xhr.send(formData);

        function displayResponse (status){
            var statusText = "";
            if (status < 400) {
                statusText='Ваш заказ принят!';
            }
            else{
                statusText='Произошла ошибка!';
            }
            const overlayElement = document.querySelector(".overlay");
            var contentNode = overlayElement.querySelector(".overlay__content-wrapper")
                contentNode.innerHTML = '';
                var textNode = document.createElement("div");
                textNode.innerHTML = statusText;
                textNode.classList.add("overlay__text");
                contentNode.appendChild(textNode);

                overlayElement.style.display = "flex";
        }
        
        // if (validateForm(myForm)) {
        //     console.log('всё ок!');
        // }
    });

    // function validateForm(form) {
    //     let valid = true;

    //     if (!validateField(form.elements.name)) {
    //         valid = false;
    //     }

    //     if (!validateField(form.elements.phone)) {
    //         valid = false;
    //     }

    //     if (!validateField(form.elements.comment)) {
    //         valid = false;
    //     }

    //     if (!validateField(form.elements.email)) {
    //         valid = false;
    //     }

    //     return valid;
    // }

    // function validateField(field) {
    //     if (!field.checkValidity()) {
    //         field.nextElementSibling.textContent = field.validationMessage;

    //         return false;
    //     } else {
    //         field.nextElementSibling.textContent = '';

    //         return true;
    //     }
    // }
}


function initCloseOverlay() {
    const overlayElement = document.querySelector(".overlay");
    const closeElement = overlayElement.querySelector(".overlay__close");
    closeElement.addEventListener("click", function (e) {
        e.preventDefault();
        overlayElement.style.display = "none";
    });

    overlayElement.addEventListener("click", function (e) {
        if (e.target === overlayElement) {
            closeElement.click();
        }
    });
}


function hasSomeParentWithClass(element, classname) {
    if (element.className != null && element.className.split(' ').indexOf(classname) >= 0) return true;
    return element.parentNode && hasSomeParentWithClass(element.parentNode, classname);
}