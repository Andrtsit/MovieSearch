import { useAppContext } from "../context/AppContext";
import { getMovie } from "../utils/getMovie";

function MovieCard({ movie }) {
  const { setIsModalOpen, setSelectedMovie } = useAppContext();

  return (
    <div
      className="movie-card"
      onClick={async () => {
        const content = await getMovie(movie.imdbID);
        setSelectedMovie(content);
        setIsModalOpen((curr) => !curr);
      }}
    >
      <img src={movie.Poster} alt={`Poster for ${movie.Title}`} />
      <div className="movie-card-overlay">
        <div className="movie-card-title">{movie.Title}</div>
      </div>
    </div>
  );
}

export default MovieCard;
