import styles from "../Home/Homepage.module.css";
import ButtonComponent from "../../Components/Button/Button";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <section>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <ButtonComponent
          path="/app"
          buttonText="Start Tracking Now"
          className={styles.homeButton}
        ></ButtonComponent>
      </section>
    </main>
  );
}
