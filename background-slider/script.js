const body = document.body
const slides = document.querySelectorAll(".slide")
const slidesLength = slides.length
const left = document.getElementById("left")
const right = document.getElementById("right")

let currentIndex = 0;


const setBodyImg = (i) => {
    body.style.backgroundImage = slides[i].style.backgroundImage
}

const switchSlide = (i) => {
    slides.forEach((slide) => slide.classList.remove('active'));

    slides[i].classList.add("active")
}

const goToSlide = (idx) => {
    currentIndex = (idx + slidesLength) % slidesLength;
    setBodyImg(currentIndex)
    switchSlide(currentIndex)
}


left.addEventListener("click", () => goToSlide(currentIndex - 1));
right.addEventListener("click", () => goToSlide(currentIndex + 1));

goToSlide(0);