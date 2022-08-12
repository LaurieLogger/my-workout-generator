import BankAdder from "./BankAdder";
import { useState } from "react";

const WorkoutProvider = () => {
  const [activityBank, setActivityBank] = useState([
    { activity: "Pull-up", cals: 1, zone: "arms" },
    { activity: "Jump squat", cals: 2, zone: "legs" },
    { activity: "Burpee", cals: 3, zone: "core" },
    { activity: "Side lunge", cals: 1, zone: "legs" },
    { activity: "Press-up", cals: 2, zone: "arms" },
    { activity: "Sit-up", cals: 2, zone: "core" },
  ]);
  console.log(activityBank);
  return <BankAdder setActivityBank={setActivityBank} />;
};

export default WorkoutProvider;
