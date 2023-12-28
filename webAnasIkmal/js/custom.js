// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// overlay menu
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");
}


/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// lightbox gallery
$(document).on("click", '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

function calculateBMI() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    if (weight && height) {
        var bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        var resultElement = document.getElementById('result');
        var categoryElement = document.getElementById('category');
        
        resultElement.innerHTML = 'Your BMI is: ' + bmi;

        // Classify BMI
        if (bmi < 18.5) {
            categoryElement.innerHTML = 'Category: Underweight';
        } else if (bmi >= 18.5 && bmi < 25) {
            categoryElement.innerHTML = 'Category: Normal weight';
        } else if (bmi >= 25 && bmi < 30) {
            categoryElement.innerHTML = 'Category: Overweight';
        } else {
            categoryElement.innerHTML = 'Category: Obese';
        }
    } else {
        alert('Please enter both weight and height.');
    }
}