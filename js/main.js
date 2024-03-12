const display = document.querySelector(".display")
const reset = document.querySelector(".reset")
const inc = document.querySelector(".inc")

let count = 0
reset.addEventListener("click", ()=>{
    count = 0
    display.innerHTML = count
})

inc.addEventListener("click", ()=>{
    count++
    display.innerHTML = count
})