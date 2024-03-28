var slide = document.getElementsByClassName("slide");
var indicator = document.getElementById("indicator");
var dots = document.getElementsByClassName("dots");
var autoplay = document
    .getElementsByClassName("slider")[0]
    .getAttribute("data-autoplay");
var l = slide.length;
var interval = 5000;
var set;

window.addEventListener("scroll", function () {
    var elements = document.querySelectorAll(".highlight-content");
    const cards = document.querySelectorAll(".card");

    elements.forEach(function (element, index) {
        var windowHeight = window.innerHeight;

        var position = element.getBoundingClientRect().top;
        if (position < windowHeight) {
            setTimeout(function () {
                element.style.opacity = 1;
            }, 300 * index);
        }
    });
    cards.forEach(function (cards, index) {
        var windowHeight = window.innerHeight;

        var position = cards.getBoundingClientRect().top;
        if (position < windowHeight) {
            setTimeout(function () {
                cards.style.opacity = 1;
            }, 600 * index);
        }
    });
});

window.onload = () => {
    initialize();
    slide[0].style.opacity = "1";
    for (var j = 0; j < l; j++) {
        indicator.innerHTML +=
            "<div class='dots' onclick=change(" + j + ")></div>";
    }

    dots[0].style.background = "#696969";
};

function initialize() {
    if (autoplay === "true") set = setInterval(next, interval);
}

var count = 0;

function change(index) {
    clearInterval(set);
    count = index;
    for (var j = 0; j < l; j++) {
        slide[j].style.opacity = "0";
        dots[j].style.background = "#bdbdbd";
    }
    slide[count].style.opacity = "1";
    dots[count].style.background = "#696969";
}

var count = 0;
function next() {
    clearInterval(set);
    slide[count].style.opacity = "0";
    dots[count].style.background = "#bdbdbd";
    count = (count + 1) % l;
    slide[count].style.opacity = "1";
    dots[count].style.background = "#696969";
    initialize();
}

function prev() {
    clearInterval(set);
    slide[count].style.opacity = "0";
    dots[count].style.background = "#bdbdbd";
    count = (count - 1 + l) % l;
    slide[count].style.opacity = "1";
    dots[count].style.background = "#696969";
    initialize();
}

function validateName() {
    var name = document.getElementById("name").value;
    var nameRegex = /^[a-zA-Z\s]*$/;
    var errorMsg = "";

    document.getElementById("name-error").innerHTML = "";

    if (name === "") {
        errorMsg = "Name is required.";
    } else if (!nameRegex.test(name)) {
        errorMsg = "Only letters and spaces are allowed.";
    }

    document.getElementById("name-error").innerHTML =
        "<div class='error-container' style='display: flex;'><box-icon size='s' style='display: flex;'name='info-circle'color='red'></box-icon><div class='error'>" +
        errorMsg +
        "</div></div>";

    return errorMsg;
}

function validateEmail() {
    var email = document.getElementById("email").value;
    var errorMsg = "";
    document.getElementById("email-error").innerHTML = "";
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        errorMsg = "Email is required.";
    } else if (!emailRegex.test(email)) {
        errorMsg = "Invalid email format.";
    }

    document.getElementById("email-error").innerHTML =
        "<div class='error-container' style='display: flex;'><box-icon size='s' style='display: flex;' name='info-circle' color='red'></box-icon><div class='error'>" +
        errorMsg +
        "</div></div>";

    return errorMsg;
}

function validateSelect() {
    var select = document.getElementById("option").value;
    var errorMsg = "";

    document.getElementById("select-error").innerHTML = "";

    if (select === "") {
        errorMsg = "Option is required!";
    }

    document.getElementById("select-error").innerHTML =
        "<div class='error-container' style='display: flex;'><box-icon size='s'  style='display: flex;'name='info-circle' color='red'></box-icon><div class='error'>" +
        errorMsg +
        "</div></div>";

    return errorMsg;
}

function validateForm() {
    var nameError = validateName();
    var emailError = validateEmail();
    var selectError = validateSelect();

    if (nameError === "" && emailError === "" && selectError === "") {
        showSuccessNotification();
    }
}

function showSuccessNotification() {
    alert("Success! Form submitted successfully.");
}
