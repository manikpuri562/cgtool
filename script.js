console.log("Welcome to My Simple Blog!");

// Read More buttons
let buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        alert("Opening blog post...");
    });
});
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.innerHTML = "☀️ Light Mode";
    } else {
        themeBtn.innerHTML = "🌙 Dark Mode";
    }
});
const search = document.getElementById("search");
const cards = document.querySelectorAll(".blog-card");

search.addEventListener("keyup", function () {
    const text = search.value.toLowerCase();

    cards.forEach(function(card) {
        const title = card.querySelector("h3").textContent.toLowerCase();

        if (title.includes(text)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
