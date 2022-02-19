import "./App.scss";

import Header from "./components/Header";
import Main from "./components/Main";
// import Banner from "./components/Banner";
// import CardItem from "./components/CardItem";
import PiePagina from "./components/PiePagina";


function App() {
  return (
    <div className="App">
      <Header />
      <Main />

      <PiePagina />
    </div>
  );
}

export default App;
