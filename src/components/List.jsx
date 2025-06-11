import { useEffect, useRef } from "react";
import { useAppContext } from "../context/AppContext";
import MovieCard from "./MovieCard";

function List() {
  const { data, currPage } = useAppContext();
  const listRef = useRef(null);
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = 0;
    }
  }, [currPage]);
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
        Not Found 😥
      </section>
    );

  return (
    <section ref={listRef}>
      {data.map((movie) => (
        <MovieCard movie={movie} key={movie.imdbID} />
      ))}
    </section>
  );
}

export default List;
