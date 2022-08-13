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

      {/* //////////////manualGeneratorButtonsBelow///////////////////// */}
      {/* <span className="generator-grouping">
        <form className="generator-grouping">
          <label htmlFor="select-activity" className="input-label light-text">
            Activity
          </label>
          <select id="select-activity" className="input-box">
            {activityBank.map((activity) => {
              return (
                <option value={activity.activity}>{activity.activity}</option>
              );
            })}
          </select>
          <label
            htmlFor="select-reps"
            className="input-label light-text"
            id="select-reps-label"
          >
            Reps:{" "}
          </label>
          <select id="select-reps" className="input-box">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button className="light-text submit-button" id="add-activity-button">
            Add +
          </button>
        </form>
      </span> */}
      {/* /////////////////autoGeneratorButtonsBelow/////////////////////*/}
    </>
  );
};

export default WorkoutProvider;
