import "./App.css";
import Navbar from "./Navbar";
import Shop from "./Shop";

function App() {
  return (
    // React fragment <> CODE </>.
    <center>
      <>
        <Navbar />
        <div className="Container">
          <Shop />
        </div>
      </>
    </center>
  );
}

export default App;
