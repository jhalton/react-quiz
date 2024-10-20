import "./App.css";
import QuizCard from "./Components/QuizCard/page";
import Category from "./Components/Category/page";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Home</p>
        <QuizCard />
        <Category />
      </header>
    </div>
  );
}

export default App;
