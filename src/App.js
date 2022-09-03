import "./index.css";
import MiApi from "./components/MiApi";
import Header from "./components/Header";
import imagen from "./assets/img/imagen1.png";

function App() {
  return (
    <>
      <Header texto={"RICK AND MORTY *** RICK AND MORTY *** "}>
        <img className="imagen" src={imagen} alt="Rick and Morty" />
      </Header>

      <div className="general">
        <MiApi />
      </div>
    </>
  );
}

export default App;
