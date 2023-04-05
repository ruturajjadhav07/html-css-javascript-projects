let value = document.getElementById("value")
let button = document.querySelectorAll(".button")

// button.forEach(function(btn){
//     console.log(btn)
// })

let count = 0

button.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        // console.log(e.currentTarget.classList)
        const nums = e.currentTarget.classList;
        if (nums.contains("inc")) {
            count++;
        }
        else if (nums.contains("dec")) {
            count--;
        }
        else {
            count = 0
        }

        if (count > 0) {
            value.style.color = "green"
        }

        if (count < 0) {
            value.style.color = "red"
        }

        if (count === 0) {
            value.style.color = "black"
        }

        value.textContent = count
    })
})

