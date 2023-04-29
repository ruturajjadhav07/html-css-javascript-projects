const calculate = document.querySelector(".button")


calculate.addEventListener('click', (e) => {
    e.preventDefault()

    let amount = document.querySelector("#amount").value
    let discount = document.querySelector("#discount").value

    let discount_amt = document.querySelector("#discount_amt")
    let final = document.querySelector("#final")

    discount_amt.value = amount * discount / 100
    final.value = amount - discount_amt.value
})

function refresh(){
    window.location.reload();
}
