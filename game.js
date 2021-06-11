const dino = document.getElementById("dino");

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");
    }
   

    setTimeout(function () {
        dino.classList.remove("jump");
    },  1000);
}

document.addEventListener("click", function(event) {
    jump();
});