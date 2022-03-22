export const durationParser = (minutes) => {
  return `${Math.floor(minutes / 60)}ч ${minutes % 60}м`;
};

export const moviesFilterer = (movies, search, shortFilms) => {
  const filteredMovies = [];
  movies.forEach((movie) => {
    const allTextFieldsArray = `${movie.country} ${movie.description} ${movie.director} ${movie.nameEN} ${movie.nameRU}`;
    if (allTextFieldsArray.includes(search)) {
      if ((shortFilms && movie.duration > 40) || !shortFilms) {
        filteredMovies.push(movie);
      }
    }
  });

  console.log(filteredMovies);
  return filteredMovies;
};

export const checkIfSaved = (movie, savedMovies) => {
  if (savedMovies?.length)
  return (movie.isSaved = savedMovies?.some((savedMovie) => savedMovie.movieId === movie.id));
};

export const getMovieId = (innerId, savedMovies) => {
  const movie = savedMovies.find((movie) => movie.movieId === innerId);
  return movie._id;
}

