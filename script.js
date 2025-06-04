function nextPage() {
    window.location.href = "yes.html"; // Make sure this file exists
}

function moveButton() {
    const button = document.getElementById("noButton");

    // Random position within viewport
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);

    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}
