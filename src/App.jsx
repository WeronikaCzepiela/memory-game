import "./App.scss";
import { Accounts } from "./components/Accounts/Accounts";
import { Header } from "./components/Header/Header";
function App() {
  return (
    <div className="App">
      <Header />
      {/*<Game />*/}
      <Accounts />
    </div>
  );
}

export default App;
