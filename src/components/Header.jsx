import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { getMovies } from "../utils/getMovies";
import { getSeries } from "../utils/getSeries";
import { MdLocalMovies } from "react-icons/md";

function Header() {
  const { dispatch, inputType } = useAppContext();
  const [inputedValue, setInputedValue] = useState("");

  useEffect(() => {
    const trimmedInput = inputedValue.trim();

    const timer = setTimeout(async () => {
      if (trimmedInput === "") {
        dispatch({ type: "RESET_DATA" });
        return;
      }

      try {
        let newData =
          inputType === "movies"
            ? await getMovies(trimmedInput, 1)
            : await getSeries(trimmedInput, 1);

        if (newData.Response === "False") {
          dispatch({ type: "RESET_DATA" }); // clear previous results
          return;
        }

        dispatch({ type: "SET_DATA", payload: newData.Search });
        dispatch({
          type: "SET_TOTAL_RESULTS",
          payload: Number(newData.totalResults),
        });
        dispatch({ type: "SET_QUERY", payload: trimmedInput });
        dispatch({ type: "SET_CURR_PAGE", payload: 1 });
      } catch (err) {
        console.error("Failed to fetch data:", err);
        dispatch({ type: "RESET_DATA" });
      }
    }, 600); // 600ms debounce

    return () => clearTimeout(timer);
  }, [inputedValue, inputType, dispatch]);

  return (
    <header>
      <div className="search-container">
        <input
          className="search-input"
          value={inputedValue}
          onChange={(e) => setInputedValue(e.target.value)}
          type="text"
          id="searchBar"
          placeholder={
            inputType === "movies"
              ? "Search for Movies"
              : "Search for TV Series"
          }
        />

        <select
          value={inputType}
          className="search-select"
          onChange={(e) =>
            dispatch({ type: "SET_INPUT_TYPE", payload: e.target.value })
          }
          name="input-type"
          id="input-type"
        >
          <option value="movies">MOVIES</option>
          <option value="series">TV-SERIES</option>
        </select>
      </div>
    </header>
  );
}

export default Header;
