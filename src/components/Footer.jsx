import { useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import { getMovies } from "../utils/getMovies";
import { getSeries } from "../utils/getSeries";
import Button from "./Button";

function Footer() {
  const { currPage, numPages, query, dispatch, inputType } = useAppContext();
  const activeButtonStyle = { color: "aqua" };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currPage]);

  async function handlePage(page) {
    if (page === currPage) return;
    try {
      let newData;
      if (inputType === "movies") {
        newData = await getMovies(query, page);
      } else {
        newData = await getSeries(query, page);
      }

      if (!newData || !newData.Search) {
        alert("No results found.");
        return;
      }

      dispatch({ type: "SET_DATA", payload: newData.Search });
      dispatch({ type: "SET_CURR_PAGE", payload: page });
    } catch (err) {
      console.error("Failed to fetch data:", err);
      alert("Something went wrong while changing page.");
    }
  }

  function renderPageButtons() {
    let start, end;

    if (numPages <= 9) {
      start = 1;
      end = numPages;
    } else if (currPage <= 5) {
      start = 1;
      end = 9;
    } else if (currPage > numPages - 4) {
      end = numPages;
      start = numPages - 8;
    } else {
      start = currPage - 4;
      end = currPage + 4;
    }

    const buttons = [];
    for (let page = start; page <= end; page++) {
      buttons.push(
        <Button
          key={page}
          style={currPage === page ? activeButtonStyle : {}}
          onClick={() => handlePage(page)}
        >
          {page}
        </Button>
      );
    }
    return buttons;
  }

  return (
    <footer>
      {currPage > 1 && (
        <>
          <Button onClick={() => handlePage(1)}>&laquo;</Button>
          <Button
            style={{ fontSize: "2rem" }}
            onClick={() => handlePage(currPage - 1)}
          >
            &larr;
          </Button>
        </>
      )}

      {renderPageButtons()}

      {currPage < numPages && (
        <>
          <Button
            style={{ fontSize: "2rem" }}
            onClick={() => handlePage(currPage + 1)}
          >
            &rarr;
          </Button>
          <Button onClick={() => handlePage(numPages)}>&raquo;</Button>
        </>
      )}
    </footer>
  );
}

export default Footer;
