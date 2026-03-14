const bg = document.querySelector('.bg')
const loadingText = document.querySelector('.loading-text')
const PERCENT_IN_MS = 45;

let progress = 0;


const changeProgress = () => {
    progress++

    if (progress > 99) {
        clearInterval(int)
        loadingText.classList.add("done")
    }

    loadingText.innerText = `${ progress}%`
    loadingText.style.opacity = scale(progress, 0.5, 1)
    bg.style.filter = `blur(${scale(progress, 30, 0)}px)`
}

const scale = (num, out_min, out_max) => {
  return ((num - 0) * (out_max - out_min)) / (100 - 0) + out_min
}


let int = setInterval(changeProgress, PERCENT_IN_MS);
