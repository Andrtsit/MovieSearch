import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { getData } from "../utils/getData";
import Button from "./Button";

function Footer() {
  const [currPage, setCurrPage] = useState(1);
  const { numPages, setData, query } = useAppContext();
  const activeButtonStyle = { color: "aqua" };
  async function handlePage(page) {
    const newData = await getData(query, page);
    setData(newData.Search);
    setCurrPage(page);
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

      {(() => {
        let start;
        let end;

        if (numPages <= 10) {
          start = 1;
          end = numPages;
        } else if (currPage <= 6) {
          // Near the beginning
          start = 1;
          end = 10;
        } else if (currPage > numPages - 5) {
          // Near the end
          end = numPages;
          start = numPages - 9;
        } else {
          // Middle range
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
      })()}

      {currPage < numPages && (
        <Button
          style={{ fontSize: "2rem" }}
          onClick={() => handlePage(currPage + 1)}
        >
          &rarr;{" "}
        </Button>
      )}
    </footer>
  );
}

export default Footer;
