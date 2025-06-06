import { useAppContext } from "../context/AppContext";
import MovieCard from "./MovieCard";

function List() {
  const { data } = useAppContext();
  if (data === undefined)
    return (
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "4rem",
        }}
      >
        Not found
      </section>
    );

  return (
    <section>
      {data.map((movie) => (
        <MovieCard movie={movie} key={movie.imdbID} />
      ))}
    </section>
  );
}

export default List;
