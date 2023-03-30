let backgroundColor = document.querySelector(".container")
let h1 = document.querySelector(".color")

backgroundColor.addEventListener("mousemove", changecolor)

function changecolor() {
    let newColor = colorMaker()
    document.body.style.backgroundColor = newColor
    h1.innerText = newColor
}


colorMaker = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    return `rgb(${r},${g},${b})`
}
