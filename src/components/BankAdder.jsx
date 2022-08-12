const BankAdder = () => {
  return (
    <section className="dark-panel">
      <p className="light-text">
        Add a new workout activity below or jump right to get stuck in right
        away!
      </p>

      <form>
        <label htmlFor="activity-input" className="input-label light-text">
          Activity:
        </label>
        <input id="activity-input" type="text" className="input-box" />
        <label htmlFor="calories-input" className="input-label light-text">
          Calories p/rep:
        </label>
        <input id="calories-input" type="text" className="input-box" />
        <label htmlFor="zone-input" className="input-label light-text">
          Workout zone:
        </label>
        <input id="zone-input" type="text" className="input-box" />
        <button>Add activity</button>
      </form>
    </section>
  );
};

export default BankAdder;
