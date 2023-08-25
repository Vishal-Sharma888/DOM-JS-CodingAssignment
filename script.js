// Q1
var textElement = document.getElementById("text");
console.log(textElement.textContent);

//Q2
var headingElement = document.getElementsByTagName("h1")[0];
console.log(headingElement.textContent);

//Q3
var boxElement = document.querySelector(".box");
console.log(boxElement.textContent);

//Q4
var headingElement = document.getElementById("heading");
headingElement.textContent = "Hello World";

//Q5
var contentElement = document.getElementById("content");
var replaceButton = document.getElementById("replaceButton");
replaceButton.addEventListener("click", function () {
    contentElement.textContent = "Welcome to Elevation academy";
});

//Q6
// Get the <h1> element
var h1Element = document.querySelector('h1');

// Add the style attribute to set text color to red
h1Element.style.color = 'red';

// Add the id attribute with the value "heading"
h1Element.id = 'heading';

//Q7
var container = document.querySelector(".container");
var changeDirectionButton = document.getElementById("changeDirectionButton");
changeDirectionButton.addEventListener("click", function () {
    if (container.style.flexDirection === "row") {
        container.style.flexDirection = "column";
    } else {
        container.style.flexDirection = "row";
    }
});


//Q8 solution in HTML
function updateTimer() {
    var timerElement = document.getElementById("timer");
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    timerElement.textContent = hours + ":" + minutes + ":" + seconds;
}

setInterval(updateTimer, 1000);
