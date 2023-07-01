import "./App.scss";
import { Accounts } from "./components/Accounts/Accounts";
import { Header } from "./components/Header/Header";
import { Game } from "./components/Game/Game";
function App() {
  return (
    <div className="pAp">
      <Header />
      <Game />
      <Accounts />
    </div>
  );
}

export default App;
