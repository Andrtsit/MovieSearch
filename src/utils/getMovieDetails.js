import toast from "react-hot-toast";

export async function getMovieDetails(id) {
  if (!id) return;
  const KEY = "c98ef511";
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${KEY}&i=${id}`
    );

    const data = await response.json();
    if (data.Response === "False") throw new Error(data.Error);
    return data;
  } catch (err) {
    toast.error(err.message || "Something went wrong");
  }
}
