function orderFood() {
    alert("Thank you! Your table booking request has been received.");
}

// Simple menu card animation
const cards = document.querySelectorAll(".food-card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.cursor = "pointer";
    });
});
