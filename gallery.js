// Display coach card by default
showCoachCard();

// Add event listeners to buttons
document.getElementById("button1").addEventListener("click", function() {
    showCoachCard();
});

document.getElementById("button2").addEventListener("click", function() {
    showConvenorCards();
});

document.getElementById("button3").addEventListener("click", function() {
    showOutdoorCard();
});

function showCoachCard() {
    // Show only coach card
    document.getElementById("interview").style.display = "flex";
    document.getElementById("batting").style.display = "none";
    document.getElementById("bowling").style.display = "none";
}

function showConvenorCards() {
    // Show only cricket convenor cards
    document.getElementById("interview").style.display = "none";
    document.getElementById("batting").style.display = "none";
    document.getElementById("bowling").style.display = "flex";
}

function showOutdoorCard() {
    // Show only outdoor card
    document.getElementById("interview").style.display = "none";
    document.getElementById("batting").style.display = "flex";
    document.getElementById("bowling").style.display = "none";
}
