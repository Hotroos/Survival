document.addEventListener('DOMContentLoaded', (event) => {
                console.log('DOM fully loaded and parsed');
            });
function changeColor() {
    var header = document.getElementById("header");
    header.style.color = header.style.color == "blue" ? "black" : "blue";
}

