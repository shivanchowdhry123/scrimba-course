let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

// Fetch the button from the DOM, store it in a variable
const button = document.getElementById('log')

// Use addEventListener() to listen for button clicks
button.addEventListener('click', function() {
    // Log Jane's score when the button is clicked (via data)
    console.log(data[0].score)
})
