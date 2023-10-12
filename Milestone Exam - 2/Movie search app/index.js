const search = document.getElementById('search')
const noMovieText = document.getElementsByClassName('no-movie-text');
let movies = []
if(movies.length){
    noMovieText.style.display = 'none'
}
search.addEventListener('keyup',  () => {
    getMovies(search.value)
    console.log(search.value);
})
const moviesWrapper = document.getElementById('movies-wrapper');

const displayMovies = (movies) => {
  moviesWrapper.innerHTML = '';

  movies.forEach((movie) => {
    const movieWapper = document.createElement('div');
    movieWapper.classList.add('col-4')
    const movieCard = document.createElement('div');
    movieCard.classList.add('card', 'm-2');

    const poster = movie.Poster !== 'N/A' ? movie.Poster : 'no-poster.jpg';
    const movieContent = `
      <img src="${poster}" class="card-img-top movie-img" alt="${movie.Title}">
      <div class="card-body">
        <h5 class="card-title">${movie.Title}</h5>
        <p class="card-text">Year: ${movie.Year}</p>
      </div>
    `;

    movieCard.innerHTML = movieContent;
    movieWapper.appendChild(movieCard)
    moviesWrapper.appendChild(movieWapper);
  });
};

const getMovies = (searchString) => {
  fetch(`https://www.omdbapi.com/?s=${searchString}&apikey=11e98d14`)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then((data) => {
      if (data.Search) {
        movies = data.Search;
        displayMovies(movies);
      }
    })
    .catch((err) => {
      console.error('There was a problem with the fetch operation:', err);
    });
};


