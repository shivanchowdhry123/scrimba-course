let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// Create a function that takes a single parameter, an array,
function log(arr) {
    // and logs all the items of the array to the console.
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
// Call the function while passing in myCourses as an argument
log(myCourses)