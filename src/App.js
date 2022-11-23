import logo from "./logo.png";
import Linklist from "./components/Linklist";
import Sociallist from "./components/Sociallist";
import { Abo } from "./components/Abo";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="items-center flex w-screen justify-center h-screen columns-1 bg-[#121212]">
      <div className="max-w-sm space-y-8">
        <Header />
        <Sociallist />
        <Linklist />
        <Abo />
      </div>
    </div>
  );
}

export default App;
