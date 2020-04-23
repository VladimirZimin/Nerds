var link = document.querySelector(".contact-button");
var poppup = document.querySelector(".modal-login");
var close = document.querySelector(".modal-close");
var form = poppup.querySelector("form");
var login = poppup.querySelector("[name=login]");
var password = poppup.querySelector("[name=password]");

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    poppup.classList.add("modal-show");
    login.focus();
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    poppup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
    if (!login.value || !password.value) {
        evt.preventDefault();
        console.log("Нужно ввести логин и пароль");
    }
});

window.addEventListener("keydown", function (evt) {    
    if (evt.keyCode === 27) {                          
        evt.preventDefault();      

        if (poppup.classList.contains("modal-show")) {   
            poppup.classList.remove("modal-show");      
            poppup.classList.remove("modal-error");
        }
    }
});