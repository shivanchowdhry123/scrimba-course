// grab the count-el element, store it in a countEl variable
let count = 0
let countEl = document.getElementById("count-el")
function increment() {
    count = count + 1
    // set countEl's innerText to the count
    countEl.innerText = count
}
// 1. Create a function, save(), which logs out the count when it's called

function save() {
    console.log(count)
}