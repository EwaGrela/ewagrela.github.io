function showKey(e) {
    document.getElementById("key").textContent = e.key.toUpperCase();
    document.getElementById("keyCode").textContent = e.keyCode;
    if (e.key === " ") {
        document.getElementById("key").textContent = "Spacebar";
    }
}

document.getElementById("startingButton").addEventListener("click", start);

function start() {
    this.previousElementSibling.remove();
    this.nextElementSibling.classList.remove("invisible");
    this.remove();
}

document.addEventListener("keydown", showKey);