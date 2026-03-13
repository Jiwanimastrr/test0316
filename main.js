const generateBtn = document.getElementById("generate-btn");
const themeBtn = document.getElementById("theme-btn");
const numberCircles = document.querySelectorAll(".number-circle");

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
    const lottoNumbers = generateLottoNumbers();
    displayNumbers(lottoNumbers);
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
        circle.style.animation = "popIn 0.5s ease-out forwards";
    }, delay);
}

function displayNumbers(numbers) {
    numberCircles.forEach((circle, index) => {
        circle.style.animation = "";
        circle.textContent = "";
        displayNumber(circle, numbers[index], index * 200);
    });
}
