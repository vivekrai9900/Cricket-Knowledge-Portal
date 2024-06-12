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
    document.getElementById("coach-card").style.display = "block";
    document.getElementById("outdoor-card").style.display = "none";
    document.getElementById("cric-convenor-card").style.display = "none";
}

function showConvenorCards() {
    // Show only cricket convenor cards
    document.getElementById("coach-card").style.display = "none";
    document.getElementById("outdoor-card").style.display = "none";
    document.getElementById("cric-convenor-card").style.display = "flex";
}

function showOutdoorCard() {
    // Show only outdoor card
    document.getElementById("coach-card").style.display = "none";
    document.getElementById("outdoor-card").style.display = "block";
    document.getElementById("cric-convenor-card").style.display = "none";
}
