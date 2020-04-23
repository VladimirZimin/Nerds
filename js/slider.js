var fBtn = document.querySelector(".btn-first");
var sBtn = document.querySelector(".btn-second");
var tBtn = document.querySelector(".btn-third");

var fSld = document.querySelector(".first");
var sSld = document.querySelector(".second");
var tSld = document.querySelector(".third");

fBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    fSld.classList.add("js-slider-display");
});

sBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    sSld.classList.add("js-slider-display");
});

tBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    tSld.classList.add("js-slider-display");
});