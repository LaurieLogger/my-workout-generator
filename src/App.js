import "./App.css";
import Title from "./components/Title";
import WorkoutHeading from "./components/WorkoutHeading";
import WorkoutProvider from "./components/WorkoutProvider";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Title />
        <WorkoutProvider />
        <WorkoutHeading />
      </div>
    </div>
  );
}

export default App;
