const speedHandler = document.getElementsByName("speed-handler")[0];
const text = document.querySelector(".auto-text");
const phrase = "We Love Programming!!! <3";
const speedUpBtn = document.getElementsByClassName("speed-up")[0];
const speedDownBtn = document.getElementsByClassName("speed-down")[0];
const submitBtn = document.getElementsByClassName("submit-btn")[0];

let c = 0;
let speed = 60;

const writeText = () => {
  const t = phrase.slice(0, c);
  text.textContent = t;
  c++;

  if (c > phrase.length) {
    c = 1;
  }

  setTimeout(writeText, speed);
};

const updateSpeed = (newSpeed) => {
  if (newSpeed <= 15) {
    speed = 15;
  } else if (newSpeed >= 300) {
    speed = 300;
  } else {
    speed = newSpeed;
  }
  speedHandler.value = speed;
};

const validateInput = (input) => {
  if (!/^\d+$/.test(input)) return 60;
  return Number(input);
};

speedUpBtn.addEventListener("click", () => {
  updateSpeed(speed + 15);
  submitBtn.classList.remove("visible");
});

speedDownBtn.addEventListener("click", () => {
  updateSpeed(speed - 15);
  submitBtn.classList.remove("visible");
});

speedHandler.addEventListener("input", () => {
    submitBtn.classList.add("visible");
});

submitBtn.addEventListener("click", () => {
  updateSpeed(validateInput(speedHandler.value));
  submitBtn.classList.remove("visible");
});



updateSpeed(speed);
writeText();
