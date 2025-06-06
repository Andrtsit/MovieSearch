export async function getMovieDetails(id) {
  if (!id) return;
  const KEY = "c98ef511";
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${KEY}&i=${id}`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
