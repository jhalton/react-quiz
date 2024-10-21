import "./App.css";
import Category from "./Components/Category/page";
import InstallReactCard from "./Components/QuizCard/install-react-card";
import UseStateCard from "./Components/QuizCard/useState-card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Home</p>
        <Category />
        <InstallReactCard />
        <UseStateCard />
      </header>
    </div>
  );
}

export default App;
