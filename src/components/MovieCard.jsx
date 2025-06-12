import { useAppContext } from "../context/AppContext";
import { getMovieDetails } from "../utils/getMovieDetails";

function MovieCard({ movie }) {
  const { dispatch } = useAppContext();

  const handleClick = async () => {
    try {
      const content = await getMovieDetails(movie.imdbID);
      dispatch({ type: "SET_SELECTED_MOVIE", payload: content });
      dispatch({ type: "TOGGLE_MODAL", payload: true });
    } catch (err) {
      console.error("Failed to fetch movie details:", err);
    }
  };

  return (
    <div className="movie-card" onClick={handleClick}>
      <img  src={movie.Poster === "N/A" ? "/MovieSearch/404.jpg" : movie.Poster} alt={`Poster for ${movie.Title}`}  onError={(e)=>
        {
            if (!e.target.dataset.fallback) {
      e.target.src = "/MovieSearch/404.jpg";
      e.target.dataset.fallback = "true";
    }
        }
      } />
      
      <div className="movie-card-overlay">
        <div className="movie-card-title">{movie.Title}</div>
      </div>
    </div>
  );
}

export default MovieCard;
