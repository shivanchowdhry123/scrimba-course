let firstCard = 10
let secondCard = 7
let sum = firstCard + secondCard

// Write the conditional according to these rules:

// if less than or equal to 20 -> , do you want to draw a new card? 
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"

if (sum < 21) {
    console.log('do you want to draw a new card? ❓')
} else if (sum === 21){
    console.log('Wohoo! You\'ve got Blackjack! 🥳')
}