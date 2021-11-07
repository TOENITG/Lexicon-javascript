const form = document.querySelector("form");
const searchTerm = document.querySelector("#movie-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const getData = async (movie) => {
  console.log(movie);

  const res = await fetch(`/movies/search/${movie}`);
  const response = res.json();

  console.log(response);
};
