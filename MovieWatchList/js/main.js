// Array to store the list of movies
let movieList = [];

// Function to add a movie to the array
function addMovie() {
  const movieInput = document.getElementById("movie-name");
  const movieTitle = movieInput.value.trim();

  if (movieTitle === "") {
    alert("Please enter a movie title.");
    return;
  }

  // Add movie to the array
  movieList.push(movieTitle);

  // Clear the input field
  movieInput.value = "";

  // Update the displayed watchlist
  displayMovies();
}

// Function to display movies on the webpage
function displayMovies() {
  const listElement = document.getElementById("movie-list");
  listElement.innerHTML = ""; // Clear current list before re-rendering

  // Loop through movie array and create list items
  movieList.forEach((movie, index) => {
    const li = document.createElement("li");
    li.classList.add("collection-item");

    // Movie title span
    const span = document.createElement("span");
    span.classList.add("movie-title");
    span.textContent = movie;

    // Remove button
    const removeBtn = document.createElement("span");
    removeBtn.classList.add("remove-btn", "material-icons");
    removeBtn.textContent = "delete";
    removeBtn.onclick = () => removeMovie(index);

    // Append elements to list item
    li.appendChild(span);
    li.appendChild(removeBtn);
    listElement.appendChild(li);
  });
}

// Function to remove a movie when watched
function removeMovie(index) {
  // Remove movie from array
  movieList.splice(index, 1);

  // Update display
  displayMovies();
}

// Event listener for "Add Movie" button
document.getElementById("add-movie-btn").addEventListener("click", addMovie);

// Optional: Press "Enter" to add a movie
document.getElementById("movie-name").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addMovie();
  }
});
