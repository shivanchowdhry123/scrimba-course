// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let problem = document.getElementById('error')
function situation() {
    problem.textContent = 'Something went wrong, please try again'
}