import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [totalResults, setTotalResults] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const numPages = Math.floor(totalResults / 10);

  return (
    <AppContext.Provider
      value={{
        numPages,
        query,
        setQuery,
        data,
        setData,
        selectedMovie,
        setSelectedMovie,
        totalResults,
        setTotalResults,
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAppContext() {
  return useContext(AppContext);
}
