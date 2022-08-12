import BankAdder from "./BankAdder";
import { useState } from "react";

//REMEMBER TO ADD TIP GENERATOR ON WORKOUT GENERATION

const WorkoutProvider = () => {
  const [activityBank, setActivityBank] = useState([
    { activity: "Pull-up", cals: 1, zone: "arms" },
    { activity: "Jump squat", cals: 2, zone: "legs" },
    { activity: "Burpee", cals: 3, zone: "core" },
    { activity: "Side lunge", cals: 1, zone: "legs" },
    { activity: "Press-up", cals: 2, zone: "arms" },
    { activity: "Sit-up", cals: 2, zone: "core" },
  ]);

  return (
    <>
      <BankAdder setActivityBank={setActivityBank} />

      {/* //////////////manualGeneratorButtonsBelow///////////////////// */}
      <span className="generator-grouping">
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
      </span>
      {/* /////////////////autoGeneratorButtonsBelow/////////////////////*/}
    </>
  );
};

export default WorkoutProvider;
