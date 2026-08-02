console.log("Welcome to My Simple Blog!");

// Read More buttons
let buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        alert("Opening blog post...");
    });
});