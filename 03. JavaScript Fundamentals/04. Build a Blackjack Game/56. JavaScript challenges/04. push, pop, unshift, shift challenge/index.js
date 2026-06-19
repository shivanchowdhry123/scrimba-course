let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

// The 5 largest countries in the world:
// - China
// - India
// - United States
// - Indinesia
// - Pakistan

largeCountries.pop()
largeCountries.unshift("China")
largeCountries.push("Pakistan")
console.log(largeCountries)