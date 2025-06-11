import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { getMovies } from "../utils/getMovies";
import { MdLocalMovies } from "react-icons/md";
import { getSeries } from "../utils/getSeries";

function Header() {
  const { dispatch, inputType } = useAppContext();
  const [inputedValue, setInputedValue] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const trimmedInputValue = inputedValue.trim();
    if (trimmedInputValue === "") {
      alert("empty input");
      return;
    }

    try {
      let newData;
      if (inputType === "movies") {
        newData = await getMovies(trimmedInputValue, 1);
      } else {
        newData = await getSeries(trimmedInputValue, 1);
      }

      if (!newData || !newData.Search) {
        alert("No results found.");
        return;
      }

      dispatch({ type: "SET_DATA", payload: newData.Search });
      dispatch({
        type: "SET_TOTAL_RESULTS",
        payload: Number(newData.totalResults),
      });
      dispatch({ type: "SET_QUERY", payload: trimmedInputValue });
      dispatch({ type: "SET_CURR_PAGE", payload: 1 });
    } catch (err) {
      console.error("Failed to fetch data:", err);
    }
  }

  return (
    <header>
      <MdLocalMovies className="icon" />

      <form onSubmit={handleSubmit}>
        <label htmlFor="searchBar"></label>
        <input
          value={inputedValue}
          onChange={(e) => setInputedValue(e.target.value)}
          type="text"
          id="searchBar"
          placeholder={
            inputType === "movies"
              ? "Search for a Movie"
              : "Search for a Tv-Series"
          }
        />
      </form>
      <select
        onChange={(e) =>
          dispatch({ type: "SET_INPUT_TYPE", payload: e.target.value })
        }
        name="input-type"
        id="input-type"
      >
        <option value="movies">Movies</option>
        <option value="series">Tv-Series</option>
      </select>
    </header>
  );
}

export default Header;
