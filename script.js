// Greeting function
document.getElementById("greetBtn").addEventListener("click", function () {
    let name = document.getElementById("nameInput").value;

    if (name === "") {
        alert("Please enter your name!");
    } else {
        document.getElementById("greeting").innerText = "Hello, " + name;
    }
});

// Change box color on click
let boxes = document.querySelectorAll(".box");

boxes.forEach(function (box) {
    box.addEventListener("click", function () {
        let color = this.getAttribute("data-color");
        this.style.backgroundColor = color;
    });
});