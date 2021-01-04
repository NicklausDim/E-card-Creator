let imgLink;
let frontPreview = document.getElementById("front-pvw-card");
let frontMessage = document.getElementById("front-message");
let frontMessagePreview = document.getElementById("front-msg-pvw");

let borderLink;
let backPreview = document.getElementById("back-pvw-card");
let backMessage = document.getElementById("back-message");
let backMessagePreview = document.getElementById("back-msg-pvw");

let from = document.getElementById("from");
let to = document.getElementById("to");

const imgContainer=document.getElementById("img-container");

if (imgContainer) {
    imgContainer.addEventListener('click', (event) => {
        imgLink = event.target.getAttribute('src');
        frontPreview.style.backgroundImage = `url(${imgLink})`;
    });
}


function addCustomURL() {
    imgLink = document.getElementById("custom-url").value;
    frontPreview.style.backgroundImage = `url(${imgLink})`;
}


backMessage.onkeyup = backMessage.onkeypress = function () {
    backMessagePreview.innerHTML = this.value;
}

from.onkeyup = from.onkeypress = function () {
    sender.innerHTML = this.value;
}

to.onkeyup = to.onkeypress = function () {
    recipient.innerHTML = this.value;
}


function generateCard() {
    localStorage.setItem("frontSide", document.getElementById("front-pvw-card").innerHTML);
    localStorage.setItem("backSide", document.getElementById("back-pvw-card").innerHTML);
    localStorage.setItem("frontImage", document.getElementById("front-pvw-card").style.backgroundImage);
    localStorage.setItem("borderImage", document.getElementById("back-pvw-card").style.backgroundImage);
}

