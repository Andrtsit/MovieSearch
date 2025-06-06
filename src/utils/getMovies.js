export async function getMovies(query, page) {
  if (!query) return;
  const KEY = "c98ef511";
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${KEY}&s=${query}&page=${page}`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
