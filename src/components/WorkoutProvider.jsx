import BankAdder from "./BankAdder";
import { useState } from "react";
import WorkoutList from "./WorkoutList";

//REMEMBER TO ADD TIP GENERATOR ON WORKOUT GENERATION

const WorkoutProvider = () => {
  const [activityBank, setActivityBank] = useState([
    { activity: "Pull-up", cals: 1, zone: "Arms" },
    { activity: "Jump squat", cals: 2, zone: "Legs" },
    { activity: "Burpee", cals: 3, zone: "Core" },
    { activity: "Side lunge", cals: 1, zone: "Legs" },
    { activity: "Press-up", cals: 2, zone: "Arms" },
    { activity: "Sit-up", cals: 2, zone: "Core" },
  ]);

  return (
    <>
      <BankAdder setActivityBank={setActivityBank} />

      <WorkoutList activityBank={activityBank} />
    </>
  );
};

export default WorkoutProvider;
