function showCard() {
    document.getElementById("back-pvw-card").innerHTML += localStorage.getItem("backSide");
    document.getElementById("front-pvw-card").style.backgroundImage = localStorage.getItem("frontImage");
}