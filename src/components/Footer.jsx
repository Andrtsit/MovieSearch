import { useAppContext } from "../context/AppContext";
import { getMovies } from "../utils/getMovies";
import Button from "./Button";

function Footer() {
  const { currPage, numPages, query, dispatch } = useAppContext();
  const activeButtonStyle = { color: "aqua" };

  async function handlePage(page) {
    try {
      const newData = await getMovies(query, page);
      dispatch({ type: "SET_DATA", payload: newData.Search });
      dispatch({ type: "SET_CURR_PAGE", payload: page });
    } catch (err) {
      console.error("Failed to fetch data:", err);
    }
  }

  function renderPageButtons() {
    let start, end;

    if (numPages <= 10) {
      start = 1;
      end = numPages;
    } else if (currPage <= 6) {
      start = 1;
      end = 10;
    } else if (currPage > numPages - 5) {
      end = numPages;
      start = numPages - 9;
    } else {
      start = currPage - 4;
      end = currPage + 5;
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
        <Button
          style={{ fontSize: "2rem" }}
          onClick={() => handlePage(currPage - 1)}
        >
          &larr;
        </Button>
      )}

      {renderPageButtons()}

      {currPage < numPages && (
        <Button
          style={{ fontSize: "2rem" }}
          onClick={() => handlePage(currPage + 1)}
        >
          &rarr;
        </Button>
      )}
    </footer>
  );
}

export default Footer;
