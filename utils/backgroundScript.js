try {
  chrome.runtime.onMessage.addListener((data) => {
    if (data.message === "USER_SEARCHED")
      fetchAndSaveMovieData(data.searchValue);
  });

  const fetchAndSaveMovieData = (movieName) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key={ADD_TMDB_KEY_HERE}`
    )
      .then((response) => response.json())
      .then((data) => {
        const processedResults = data?.results?.map((movie) => ({
          id: movie.id,
          title: movie.title,
          releaseDate: movie.release_date,
          overview: movie.overview,
          rating: movie.vote_average,
        }));

        const movieData = {
          query: movieName,
          searchTime: Date.now(),
          movies: processedResults,
        };

        chrome.storage.local.get("movieHistory", (result) => {
          const movieHistory = result.movieHistory || [];
          const updatedMovieHistory = [movieData, ...movieHistory];
          chrome.storage.local.set(
            { movieHistory: updatedMovieHistory },
            () => {
              // After chrome storage is updated, if popup is open triggering this to update the store with new data
              chrome.runtime.sendMessage({ message: "CHROME_STORE_UPDATED" });
            }
          );
        });
      });
  };
} catch (e) {
  console.error("Error inside background script", e);
}
