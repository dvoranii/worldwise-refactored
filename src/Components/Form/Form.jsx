import styles from "./Form.module.css";
import { useState } from "react";
import ButtonComponent from "../Button/Button";

function Form() {
  const [cityName, setCityName] = useState("");

  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttonsWrapper}>
        <ButtonComponent
          buttonText="Add"
          className={styles.btn}
          // will probably move this to the button component so no need to override the onclick handler
          onClick={(e) => {
            e.preventDefault();
            alert("Add");
          }}
        ></ButtonComponent>
        <ButtonComponent
          buttonText="← Back"
          className={styles.backBtn}
          isBackButton={true}
        ></ButtonComponent>
      </div>
    </form>
  );
}

export default Form;
