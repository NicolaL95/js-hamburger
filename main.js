document.querySelector("a > i").addEventListener("click", openbutton);


function openbutton() {
    document.querySelector(".hamburger-menu").style.display = "block";
}

document.querySelector(".close").addEventListener("click", closecross);


function closecross() {
    document.querySelector(".hamburger-menu").style.display = "none";
}
