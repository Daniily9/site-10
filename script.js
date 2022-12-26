

let pp = document.querySelectorAll(".par");


for (let i = 0; i < pp.length; i++) {
    pp[i].addEventListener("click", myFunc);
}

function myFunc (event) {
    let pp = document.querySelectorAll(".par");
    let id = event.target.id;
    document.getElementById(id).style.transform = "scale(1.5)";
    document.getElementById(id).style. transition = "all 1s";
}

let textFronElement = document.getElementById("text").textContent;
console.log(textFronElement);
document.getElementById("text").onclick = function () {
    document.getElementById("text").textContent = "Bye Dan"
}