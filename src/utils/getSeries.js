import toast from "react-hot-toast";

export async function getSeries(query, page) {
  if (!query) return;
  const KEY = "c98ef511";
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${KEY}&s=${query}&page=${page}&type=series`
    );
    const data = await response.json();
    if (data.Response === "False") throw new Error(data.Error);
    return data;
  } catch (err) {
    toast.error(err.message || "Something went wrong");
    throw err;
  }
}
