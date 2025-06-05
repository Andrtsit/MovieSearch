import Footers from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";
import Modal from "./components/Modal";
import { useAppContext } from "./context/AppContext";

function App() {
  const { isModalOpen } = useAppContext();
  return (
    <main>
      {isModalOpen ? <Modal /> : ""}
      <Header />
      <List />
      <Footers />
    </main>
  );
}

export default App;
