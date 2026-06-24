// Refactor the code so that it uses .addEventListener()

// when you click the SAVE INPUT button

let inputBtn = document.getElementById("input-btn")
let inputEl = document.getElementById("input-el")

inputBtn.addEventListener("click", function() {
    console.log("Button clicked!")
    console.log(inputEl.value)
})