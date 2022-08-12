import "./App.css";
import Title from "./components/Title";
import WorkoutHeading from "./components/WorkoutHeading";
import WorkoutProvider from "./components/WorkoutProvider";

function App() {
  return (
    <div className="App">
      <Title />
      <WorkoutProvider />
      <WorkoutHeading />
    </div>
  );
}

export default App;
