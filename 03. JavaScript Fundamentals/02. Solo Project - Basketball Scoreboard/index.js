// State Variables
let homeScore = 0
let guestScore = 0
let homeFouls = 0
let guestFouls = 0
let period = 1

// DOM Elements
const homeScoreEl = document.getElementById("home-score")
const guestScoreEl = document.getElementById("guest-score")
const homeFoulsEl = document.getElementById("home-fouls")
const guestFoulsEl = document.getElementById("guest-fouls")
const periodEl = document.getElementById("period-display")

const homeCard = document.getElementById("home-card")
const guestCard = document.getElementById("guest-card")

// Score Functions
function addHome(points) {
    homeScore += points
    homeScoreEl.textContent = homeScore
    highlightLeader()
}

function addGuest(points) {
    guestScore += points
    guestScoreEl.textContent = guestScore
    highlightLeader()
}

// Foul Functions
function addHomeFoul() {
    homeFouls++
    homeFoulsEl.textContent = homeFouls
}

function addGuestFoul() {
    guestFouls++
    guestFoulsEl.textContent = guestFouls
}

// Period Functions
function changePeriod() {
    if (period < 4) {
        period++
    } else {
        period = 1 // Loops back to 1 after 4 periods
    }
    periodEl.textContent = period
}

// Highlight the Winning Team
function highlightLeader() {
    // Reset highlights first
    homeCard.classList.remove("leader")
    guestCard.classList.remove("leader")
    
    // Check who is winning (ignoring 0-0 ties)
    if (homeScore > guestScore) {
        homeCard.classList.add("leader")
    } else if (guestScore > homeScore) {
        guestCard.classList.add("leader")
    }
}

// New Game Reset Function
function resetGame() {
    homeScore = 0
    guestScore = 0
    homeFouls = 0
    guestFouls = 0
    period = 1
    
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
    homeFoulsEl.textContent = homeFouls
    guestFoulsEl.textContent = guestFouls
    periodEl.textContent = period
    
    // Clear leaders
    homeCard.classList.remove("leader")
    guestCard.classList.remove("leader")
}