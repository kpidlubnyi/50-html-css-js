const button = document.querySelector('.ripple-btn')


button.addEventListener('click', function (e) {
    const x = e.pageX - e.target.offsetLeft
    const y = e.pageY - e.target.offsetTop

    const circle = document.createElement('span')
    circle.classList.add("circle")
    circle.style.left = x + "px"
    circle.style.top = y + "px"
    this.appendChild(circle)

    setTimeout(() => circle.remove(), 600)
})