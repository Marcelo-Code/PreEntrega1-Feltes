import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { ItemListContainer } from "./components/itemListContainer/ItemListContainer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Lista de productos" />
      <Footer />
    </>
  );
}

export default App;
