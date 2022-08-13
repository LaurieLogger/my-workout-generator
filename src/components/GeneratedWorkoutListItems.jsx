import { useState } from "react";

const GeneratedWorkoutListItems = ({ setWorkoutListItems, activityBank }) => {
  const [selectZoneInput, setSelectZoneInput] = useState("");
  const [selectCalsInput, setSelectCalsInput] = useState(100);

  const handleSelectZoneChange = (event) => {
    setSelectZoneInput(event.target.value);
  };

  const handleSelectCalsChange = (event) => {
    setSelectCalsInput(event.target.value);
  };

  const handleGenerateWorkout = (event) => {
    setWorkoutListItems([]);

    ///////////////Creating filtered activity bank//////////////////////////
    event.preventDefault();
    let filteredActivityBank = [];
    activityBank.forEach((activity) => {
      let newActivity = { ...activity };
      return filteredActivityBank.push(newActivity);
    });
    ////////////////////////Filtering by zone///////////////////////////////
    if (selectZoneInput && selectZoneInput !== "Mixed") {
      filteredActivityBank = filteredActivityBank.filter(
        (activity) => activity.zone === selectZoneInput
      );
    }
    ///////////Calculating reps/activity based on cal target////////////
    let splitActivityCals = selectCalsInput / filteredActivityBank.length;
    const generatedActivities = [];
    filteredActivityBank.forEach((activity) => {
      let modifiedActivity = {
        activity: activity.activity,
        reps: Math.ceil(splitActivityCals / activity.cals),
      };
      return generatedActivities.push(modifiedActivity);
    });

    ///////////Randomising order using Fisher-Yates shuffle///////////
    for (let i = generatedActivities.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [generatedActivities[i], generatedActivities[j]] = [
        generatedActivities[j],
        generatedActivities[i],
      ];
    }

    /////////////////Inserting filtered activities into workout///////////
    setWorkoutListItems((currWorkoutListItems) => {
      return [...currWorkoutListItems, ...generatedActivities];
    });
    setSelectCalsInput(100);
    event.target.reset();
  };

  return (
    <section className="generator-grouping">
      <form onSubmit={handleGenerateWorkout} className="generator-grouping">
        <label htmlFor="select-zone" className="input-label light-text">
          Select Zone
        </label>
        <select
          onChange={handleSelectZoneChange}
          id="select-zone"
          className="input-box"
        >
          <option value={""} defaultValue>
            Select
          </option>
          <option value={"Mixed"}>Mixed</option>
          <option value={"Arms"}>Arms</option>
          <option value={"Legs"}>Legs</option>
          <option value={"Core"}>Core</option>
        </select>

        <label
          htmlFor="select-calories"
          className="input-label light-text"
          id="select-target-cals-label"
        >
          Target calories:
        </label>
        <input
          onChange={handleSelectCalsChange}
          id="select-calories"
          type="text"
          className="input-box"
          placeholder="Cals"
        />

        <button className="light-text submit-button" id="generate-workout">
          Generate
        </button>
      </form>
    </section>
  );
};

export default GeneratedWorkoutListItems;
