import "./App.css";

import HomeContainer from "./components/HomeContainer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Todo List</h1>
      <HomeContainer />
    </div>
  );
}

export default App;
