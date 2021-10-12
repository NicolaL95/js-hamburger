document.querySelector("a > i").addEventListener("click", openbutton);


function openbutton() {
    /* document.querySelector(".hamburger-menu").className = "active" */
    var element = document.getElementById("test");
    element.className = "active";
}

document.querySelector(".close").addEventListener("click", closecross);


function closecross() {
    var element = document.getElementById("test");
    element.classList.remove("active")
}
