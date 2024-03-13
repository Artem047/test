document.addEventListener("DOMContentLoaded", function () {
    const progress = document.querySelector(".progress");
    const progressBar = document.getElementById("progress-bar");
    const valueInput = document.getElementById("valueInput");
    const animateToggle = document.getElementById("animateToggle");
    const hideToggle = document.getElementById("hideToggle");

    valueInput.addEventListener("input", updateProgress);
    animateToggle.addEventListener("change", toggleAnimation);
    hideToggle.addEventListener("change", toggleVisibility);

    function updateProgress() {
        const value = parseInt(valueInput.value);
        const angle = (value / 100) * 360;
        progress.style.transform = `rotate(${angle}deg)`;
        progressBar.style.transform = `scaleY(${value / 100})`;
    }

    function toggleAnimation() {
        const isAnimated = animateToggle.checked;
        if (isAnimated) {
            progress.classList.add("animated");
        } else {
            progress.classList.remove("animated");
        }
    }

    function toggleVisibility() {
        const isHidden = hideToggle.checked;
        if (isHidden) {
            progress.style.opacity = "0";
        } else {
            progress.style.opacity = "1";
        }
    }
});
