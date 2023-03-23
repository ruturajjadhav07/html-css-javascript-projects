let button = document.querySelector(".button")
let h1 = document.querySelector("h1")


button.addEventListener('click',function(){
    let newColor = makeRandomColor()
    document.body.style.backgroundColor = newColor
    h1.innerText = newColor
})

const makeRandomColor = () =>{
    const r = Math.floor(Math.random() *255)
    const g = Math.floor(Math.random() *255)
    const b = Math.floor(Math.random() *255)

    return `rgb(${r},${g},${b})`
}