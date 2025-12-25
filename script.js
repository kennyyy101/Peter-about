const bgBtn = document.getElementById("bgBtn");

const colors = ["#2785e3ff", "#0b0d12ff", "#a17c25ff", "#e6f4ea"];
let index = 0;

bgBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
});