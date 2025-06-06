import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { getData } from "../utils/getData";

function Header() {
  const { dispatch } = useAppContext();
  const [inputedValue, setInputedValue] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const trimmedInputValue = inputedValue.trim();
    if (trimmedInputValue === "") {
      alert("empty input");
      return;
    }

    try {
      const newData = await getData(trimmedInputValue, 1);

      dispatch({ type: "SET_DATA", payload: newData.Search });
      dispatch({
        type: "SET_TOTAL_RESULTS",
        payload: Number(newData.totalResults),
      });
      dispatch({ type: "SET_QUERY", payload: trimmedInputValue });
    } catch (err) {
      console.error("Failed to fetch data:", err);
    }
  }

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchBar"></label>
        <input
          value={inputedValue}
          onChange={(e) => setInputedValue(e.target.value)}
          type="text"
          id="searchBar"
          placeholder="Search for a movie.."
        />
      </form>
    </header>
  );
}

export default Header;
