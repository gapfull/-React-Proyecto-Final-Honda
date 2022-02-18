import "./App.scss";
import Banner from "./Components/Banner";
import CardItem from "./Components/CardItem";
import PiePagina from "./Components/PiePagina";

function App() {
  return (
    <div className="App">
      <h1>HONDA</h1>
      <Banner/>
      <CardItem />
      <PiePagina />
    </div>
  );
}

export default App;
