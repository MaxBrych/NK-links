import logo from "./logo.png";
import Linklist from "./components/Linklist";
import Sociallist from "./components/Sociallist";
import { Abo } from "./components/Abo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="border" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nordkurier
        </a>
      </header>
      <div className="justify-center columns-1">
        <Sociallist />
        <Linklist />
        <Abo />
      </div>
    </div>
  );
}

export default App;
