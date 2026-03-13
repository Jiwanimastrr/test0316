
const generateBtn = document.getElementById("generate-btn");
const numberCircles = document.querySelectorAll(".number-circle");

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
    return Array.from(numbers);
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
