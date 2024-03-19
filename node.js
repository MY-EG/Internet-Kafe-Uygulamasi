// Array to store intervals for each timer
let tableList = Array(20).fill(null);
// Array to store dynamically created div elements for displaying time
let yeniDiv = Array(20).fill(null);

// Loop to create div elements for each timer
for (var i = 0; i < 20; i++) {
    yeniDiv[i] = document.createElement('div');
    yeniDiv[i].id = 'yenidiv';
    yeniDiv[i].style.color = "rgb(185, 62, 168)";
    yeniDiv[i].style.fontWeight = 650;
    yeniDiv[i].style.borderBottom = "5px solid purple";
}

// Function to start the timer for a specific button and div
function start(buttonID, divID) {
    var second = 0;
    var minute = 0;
    var hour = 0;
    var index;
    // Determine the index of the timer based on the buttonID
    if (buttonID.length == 7) {
        index = buttonID.slice(-1) - 1;
    }
    if (buttonID.length == 8) {
        index = buttonID.slice(-2) - 1;
    }

    // Start the interval for updating the timer display
    tableList[index] = setInterval(() => {
        second++;

        // Update the timer display with hours, minutes, and seconds
        yeniDiv[index].textContent = Math.floor(hour / 10) + hour % 10 + ' : ' + Math.floor(minute / 10) + minute % 10 + ' : ' + Math.floor(second / 10) + second % 10;
        document.getElementById(divID).appendChild(yeniDiv[index]);

        // Increment minutes and hours when necessary
        if (second == 60) {
            second = 0;
            minute++;
        }

        if (minute == 60) {
            minute = 0;
            hour++;
        }
    }, 1000);
}

// Function to stop the timer for a specific button and div
function close(buttonID, divID) {
    var index;
    // Determine the index of the timer based on the buttonID
    if (buttonID.length == 7) {
        index = buttonID.slice(-1) - 1;
    }
    if (buttonID.length == 8) {
        index = buttonID.slice(-2) - 1;
    }
    // Clear the interval to stop the timer
    clearInterval(tableList[index]);
    // Remove the timer display element
    document.getElementById(divID).removeChild(yeniDiv[index]);
}

// Function to calculate and display the debt for a specific button
function salary(buttonID) {
    var index;
    // Determine the index of the timer based on the buttonID
    if (buttonID.length == 7) {
        index = buttonID.slice(-1) - 1;
    }
    if (buttonID.length == 8) {
        index = buttonID.slice(-2) - 1;
    }
    // Calculate the debt based on the elapsed time
    var salary = yeniDiv[index].textContent.slice(3, 5) * 0.5;
    // Display the debt in Turkish Lira (TL)
    alert("Borcunuz : " + salary + " TL");
}

// Function to handle starting and stopping the timer for a specific button and div
function timerstart(buttonID, divID) {
    var button = document.getElementById(buttonID);
    // If the button says 'Start', start the timer
    if (button.innerHTML == 'Start') {
        button.innerHTML = 'Finish';
        start(buttonID, divID);
    } else {
        // If the button says 'Finish', stop the timer and calculate the debt
        button.innerHTML = 'Start';
        close(buttonID, divID);
        setTimeout(() => {
            salary(buttonID);
        }, 300);
    }
}
