import { fetchGenre } from './fetch-genre';
export { renderMarkup };

async function renderMarkup(movies, querySelector) {
  const fetchGenres = await fetchGenre();
  const genresArray = fetchGenres.data.genres;
  const moviesMarkup = movies
    .map(({ poster_path, original_title, genre_ids, release_date }) => {
      const movieGenreArray = genresArray.filter(({ id, name }) => {
        if (genre_ids.includes(id)) {
          return name;
        }
      });
      const movieGenre = movieGenreArray.map(genre => genre.name);
      return `  <li class="movie-card">
          <img
            class="movie-card-img"
            src="https://image.tmdb.org/t/p/w500/${poster_path}"
            alt="${original_title}"
          />
          <div class="movie-info">
          <p class="movie-title">${original_title}</p>
          <p class="film-cards__title movie-genres">${movieGenre.join(
            ', '
          )} | ${release_date.slice(0, 4)}</p>
          </div>
      </li>`;
    })
    .join('');
  querySelector.insertAdjacentHTML('beforeend', moviesMarkup);
}
