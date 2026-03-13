const generateBtn = document.getElementById("generate-btn");
const themeBtn = document.getElementById("theme-btn");
const numberCircles = document.querySelectorAll(".number-circle");
const container = document.querySelector(".container");

// Theme Logic
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "light") {
    document.body.classList.add("light-mode");
    themeBtn.textContent = "Dark Mode";
}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    
    let theme = "dark";
    if (document.body.classList.contains("light-mode")) {
        theme = "light";
        themeBtn.textContent = "Dark Mode";
    } else {
        themeBtn.textContent = "Light Mode";
    }
    localStorage.setItem("theme", theme);
});

// Lotto Logic
generateBtn.addEventListener("click", () => {
    if (container.classList.contains("pressing")) return;

    // Start animation
    container.classList.add("pressing");

    // Wait for the "hit" moment in animation
    setTimeout(() => {
        const lottoNumbers = generateLottoNumbers();
        displayNumbers(lottoNumbers);
    }, 400);

    // Remove class after animation finishes
    setTimeout(() => {
        container.classList.remove("pressing");
    }, 600);
});

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function displayNumber(circle, number, delay) {
    setTimeout(() => {
        circle.textContent = number;
        circle.classList.add("show");
    }, delay);
}

function displayNumbers(numbers) {
    numberCircles.forEach((circle, index) => {
        circle.classList.remove("show");
        circle.textContent = "";
        displayNumber(circle, numbers[index], index * 150);
    });
}
