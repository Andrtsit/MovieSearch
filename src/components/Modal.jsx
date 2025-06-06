import { useAppContext } from "../context/AppContext";
import { FaImdb } from "react-icons/fa";

const Modal = () => {
  const { isModalOpen, selectedMovie, dispatch } = useAppContext();

  const closeModal = () => {
    dispatch({ type: "TOGGLE_MODAL", payload: false });
    dispatch({ type: "SET_SELECTED_MOVIE", payload: null });
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };

  if (!isModalOpen || !selectedMovie) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content scroll-smooth-dark">
        <button className="modal-close" onClick={closeModal}>
          ×
        </button>
        <h1>{selectedMovie.Title}</h1>
        <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
        <h1>Director : {selectedMovie.Director}</h1>
        <h2>Genre : {selectedMovie.Genre}</h2>
        <h2>Duration : {selectedMovie.Runtime}</h2>
        <h2>Released in : {selectedMovie.Released}</h2>
        <h2>Actors : {selectedMovie.Actors}</h2>
        <h2>Plot : {selectedMovie.Plot}</h2>
        <div style={{ display: "flex", gap: "1rem" }}>
          <h1>Imdb Rating : {selectedMovie.imdbRating}</h1>
          <a
            href={`https://www.imdb.com/title/${selectedMovie.imdbID}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaImdb className="imdb-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
