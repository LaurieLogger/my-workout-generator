import { useState } from "react";
import ManualWorkoutListItems from "./ManualWorkoutListItems";

const WorkoutList = ({ activityBank }) => {
  const [workoutListItems, setWorkoutListItems] = useState([]);

  return (
    <>
      <ManualWorkoutListItems
        setWorkoutListItems={setWorkoutListItems}
        activityBank={activityBank}
      />

      <ul className="light-panel dark-text">
        {workoutListItems.map(({ activity, reps }) => {
          return (
            <li className="list-text">
              <span className="list-shape">{reps}</span> {activity}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default WorkoutList;
