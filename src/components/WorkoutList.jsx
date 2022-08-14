import { useState } from "react";
import ManualWorkoutListItems from "./ManualWorkoutListItems";
import GeneratedWorkoutListItems from "./GeneratedWorkoutListItems";

const WorkoutList = ({
  activityBank,
  filteredActivityBank,
  splitActivityCals,
}) => {
  const [workoutListItems, setWorkoutListItems] = useState([]);
  const handleClear = () => {
    setWorkoutListItems([]);
  };

  return (
    <>
      <ManualWorkoutListItems
        setWorkoutListItems={setWorkoutListItems}
        activityBank={activityBank}
      />

      <GeneratedWorkoutListItems
        activityBank={activityBank}
        setWorkoutListItems={setWorkoutListItems}
      />

      <ul className="list-panel dark-text">
        {workoutListItems.map(({ activity, reps }, index) => {
          return (
            <li className="list-text" key={index}>
              <span className="list-shape">{reps}</span> {activity}
            </li>
          );
        })}
      </ul>

      <button
        onClick={handleClear}
        id="submit-activity"
        className="clear light-text"
      >
        Clear x
      </button>
    </>
  );
};

export default WorkoutList;
