document.addEventListener("DOMContentLoaded", function() {

    // Display coach card by default
showIndiaCard();

// Add event listeners to buttons
document.getElementById("button1").addEventListener("click", function() {
    console.log("Button 1 clicked");
    showIndiaCard();
});

document.getElementById("button2").addEventListener("click", function() {
    show1983Card();
});

document.getElementById("button3").addEventListener("click", function() {
    showsachinCard();
});

document.getElementById("button4").addEventListener("click", function() {
    showsauravCard();
});

document.getElementById("button5").addEventListener("click", function() {
    showdhoniCard();
});

document.getElementById("button6").addEventListener("click", function() {
    showviratCard();
});

document.getElementById("button7").addEventListener("click", function() {
    showwomenCard();
});

document.getElementById("button8").addEventListener("click", function() {
    showassamCard();
});

function showIndiaCard() {
    document.getElementById("India").style.display = "block";
    document.getElementById("1983").style.display = "none";
    document.getElementById("sachin").style.display = "none";
    document.getElementById("sourav").style.display = "none";
    document.getElementById("dhoni").style.display = "none";
    document.getElementById("virat").style.display = "none";
    document.getElementById("women").style.display = "none";
    document.getElementById("assam").style.display = "none";
}

function show1983Card() {
    document.getElementById("India").style.display = "none";
    document.getElementById("1983").style.display = "block";
    document.getElementById("sachin").style.display = "none";
    document.getElementById("sourav").style.display = "none";
    document.getElementById("dhoni").style.display = "none";
    document.getElementById("virat").style.display = "none";
    document.getElementById("women").style.display = "none";
    document.getElementById("assam").style.display = "none";
}

function showsachinCard() {
    document.getElementById("India").style.display = "none";
    document.getElementById("1983").style.display = "none";
    document.getElementById("sachin").style.display = "block";
    document.getElementById("sourav").style.display = "none";
    document.getElementById("dhoni").style.display = "none";
    document.getElementById("virat").style.display = "none";
    document.getElementById("women").style.display = "none";
    document.getElementById("assam").style.display = "none";
}

function showsauravCard() {
    document.getElementById("India").style.display = "none";
    document.getElementById("1983").style.display = "none";
    document.getElementById("sachin").style.display = "none";
    document.getElementById("sourav").style.display = "block";
    document.getElementById("dhoni").style.display = "none";
    document.getElementById("virat").style.display = "none";
    document.getElementById("women").style.display = "none";
    document.getElementById("assam").style.display = "none";
}

function showdhoniCard() {
    document.getElementById("India").style.display = "none";
    document.getElementById("1983").style.display = "none";
    document.getElementById("sachin").style.display = "none";
    document.getElementById("sourav").style.display = "none";
    document.getElementById("dhoni").style.display = "block";
    document.getElementById("virat").style.display = "none";
    document.getElementById("women").style.display = "none";
    document.getElementById("assam").style.display = "none";
}

function showviratCard() {
    document.getElementById("India").style.display = "none";
    document.getElementById("1983").style.display = "none";
    document.getElementById("sachin").style.display = "none";
    document.getElementById("sourav").style.display = "none";
    document.getElementById("dhoni").style.display = "none";
    document.getElementById("virat").style.display = "block";
    document.getElementById("women").style.display = "none";
    document.getElementById("assam").style.display = "none";
}

function showwomenCard() {
    document.getElementById("India").style.display = "none";
    document.getElementById("1983").style.display = "none";
    document.getElementById("sachin").style.display = "none";
    document.getElementById("sourav").style.display = "none";
    document.getElementById("dhoni").style.display = "none";
    document.getElementById("virat").style.display = "none";
    document.getElementById("women").style.display = "block";
    document.getElementById("assam").style.display = "none";
}

function showassamCard() {
    document.getElementById("India").style.display = "none";
    document.getElementById("1983").style.display = "none";
    document.getElementById("sachin").style.display = "none";
    document.getElementById("sourav").style.display = "none";
    document.getElementById("dhoni").style.display = "none";
    document.getElementById("virat").style.display = "none";
    document.getElementById("women").style.display = "none";
    document.getElementById("assam").style.display = "block";
}

    





  });