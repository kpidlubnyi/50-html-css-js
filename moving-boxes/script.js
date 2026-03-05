const btnElement = document.getElementById("btn");
const boxesElement = document.getElementById("boxes");

btnElement.addEventListener("click", () =>
  boxesElement.classList.toggle("big"),
);

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundPosition = `${-200 * j}px ${-200 * i}px`;
    boxesElement.appendChild(box);
  }
}
