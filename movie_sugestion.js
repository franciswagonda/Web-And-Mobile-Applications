

// Movie Recommendation System 
// This version shows how the system works without user prompts

// Step 1: Store movies by genre
const movies = {
    action: ["Mad Max", "John Wick", "Avengers", "The Dark Knight"],
    comedy: ["The Mask", "Home Alone", "Jumanji", "Mr. Bean"],
    horror: ["The Conjuring", "IT", "Insidious", "A Quiet Place"],
    animation: ["Frozen", "Zootopia", "Toy Story", "Shrek"]
};

// Step 2: Function to display movies
function showMovies(genre) {
    if (movies[genre]) {
        console.log(`\nHere are some great ${genre} movies:`);

        // Loop through the movies in that genre
        for (let i = 0; i < movies[genre].length; i++) {
            console.log(`${i + 1}. ${movies[genre][i]}`);
        }
    } else {
        console.log(`\nSorry, we don't have that genre. Try again!`);
    }
}

// Step 3: Example of how the process works
console.log("=== MOVIE RECOMMENDER SYSTEM ===\n");

// Example 1: User wants action movies
console.log("User requests: action");
showMovies("action");

// Example 2: User wants comedy movies
console.log("\n---");  // Changed em dash to regular hyphens
console.log("User requests: comedy");
showMovies("comedy");

// Example 3: User requests invalid genre
console.log("\n---");  // Changed em dash to regular hyphens
console.log("User requests: romance");
showMovies("romance");

// Example 4: User wants horror movies
console.log("\n---");  // Changed em dash to regular hyphens
console.log("User requests: horror");
showMovies("horror");

console.log("\n=== END OF SAMPLE ===");
console.log("Thanks for using Movie Recommender!");