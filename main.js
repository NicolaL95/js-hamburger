document.querySelector("a > i").addEventListener("click", openbutton);

var element = document.getElementsByClassName("hamburger-menu")[0];

function openbutton() {
    element.classList.add("active")
}

document.querySelector(".close").addEventListener("click", closecross);


function closecross() {
    element.classList.remove("active")
}
