const bodyEl = document.querySelector("body");
const modeButtons = document.querySelectorAll(".mode-btn");

const setMode = (mode) => {
  // Remove all previous classes from body element
  bodyEl.classList.remove("dark", "red", "blue", "green");

  // Add the class corresponding to the mode
  bodyEl.classList.add(mode);

  // Save the mode in local storage
  localStorage.setItem("mode", mode);
};

// Set the default mode when the page loads
const initialMode = localStorage.getItem("mode") || "light";
setMode(initialMode);

// Add event listeners to all mode buttons
modeButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const mode = event.target.dataset.mode;
    setMode(mode);
  });
});
