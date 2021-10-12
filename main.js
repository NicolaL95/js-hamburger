document.querySelector("a > i").addEventListener("click", openbutton);


function openbutton() {
    document.querySelector(".hamburger-menu").className = "active"
}

document.querySelector(".close").addEventListener("click", closecross);


function closecross() {
    document.querySelector(".hamburger-menu").style.display = "none";
}
