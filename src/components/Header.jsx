import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { getData } from "../utils/getData";

function Header() {
  const { setData, setTotalResults, setQuery } = useAppContext();
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
      setData(newData.Search);
      setTotalResults(Number(newData.totalResults));
      setQuery(trimmedInputValue);
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
