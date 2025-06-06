import { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

const initialState = {
  query: "",
  data: [],
  totalResults: null,
  selectedMovie: null,
  isModalOpen: false,
  currPage: 1,
};

function appReducer(state, action) {
  switch (action.type) {
    case "SET_QUERY":
      return { ...state, query: action.payload };
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "SET_TOTAL_RESULTS":
      return { ...state, totalResults: action.payload };
    case "SET_SELECTED_MOVIE":
      return { ...state, selectedMovie: action.payload };
    case "TOGGLE_MODAL":
      return { ...state, isModalOpen: action.payload };
    case "SET_CURR_PAGE":
      return { ...state, currPage: action.payload };
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const numPages = Math.ceil(state.totalResults / 10);

  return (
    <AppContext.Provider
      value={{
        ...state,
        numPages,
        dispatch,
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
