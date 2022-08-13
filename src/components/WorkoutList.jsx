import { useState } from "react";
import ManualWorkoutListItems from "./ManualWorkoutListItems";
import GeneratedWorkoutListItems from "./GeneratedWorkoutListItems";

const WorkoutList = ({
  activityBank,
  filteredActivityBank,
  splitActivityCals,
}) => {
  const [workoutListItems, setWorkoutListItems] = useState([]);
  console.log(workoutListItems, "<<<<<<<This");
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
