// Define varibales to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0;

// Define varibales to hold "display" value
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

// Define varibales to hold setInterval() function
let interval = null;

// Define variable to hold stopwatch status
let status = "stopped";

// Stopwatch function
// Logic to determine when to increment next value
function stopwatch() {
    seconds++;

    // Logic to determine when to increment next value
    if (seconds/60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes/60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    // If the seconds/minutes/hours is one digit then we will be adding a leading 0 to the value
    if (seconds < 10) {
        displaySeconds = "0" + seconds.toString();
    }
    else {
        displaySeconds = seconds;
    }

    if (minutes < 10) {
        displayMinutes = "0" + minutes.toString();
    }
    else {
        displayMinutes = minutes;
    }

    if (hours < 10) {
        displayHours = "0" + hours.toString();
    }
    else {
        displayHours = hours;
    }

    // Display updated time values to user
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}


function startStop() {
    if (status === "stopped") {
        // start the stopwatch
        interval = window.setInterval(stopwatch,1000);
        document.getElementById("startstop").innerHTML = "Stop";
        status = "started";
    }
    else {
        window.clearInterval(interval);
        document.getElementById("startstop").innerHTML = "Start";
        status = "stopped";
    }
}


// Function to reset stopwatch

function reset() {
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startstop").innerHTML = "Start";
}