import { useAppContext } from "../context/AppContext";
import MovieCard from "./MovieCard";

function List() {
  const { data } = useAppContext();

  return (
    <section>
      {data.map((movie) => (
        <MovieCard movie={movie} key={movie.imdbID} />
      ))}
    </section>
  );
}

export default List;
