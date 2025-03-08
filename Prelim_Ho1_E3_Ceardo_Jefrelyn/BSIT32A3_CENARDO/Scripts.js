document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded successfully!");

    // Back Button Functionality
    let backButton = document.getElementById("backButton");
    if (backButton) {
        backButton.addEventListener("click", function () {
            window.location.href = "index.html"; // Redirect to index.html
        });
    }
});
