const toggle = document.getElementById("toggle");
const text = toggle.querySelector(".text")

toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");

    if (toggle.clientLeft.contains("ON")) {
        Text.textContontent = "ON";
    } else {
        Text.textContontent = "OFF";
    }

});