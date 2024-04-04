import styles from "../AppLayout/AppLayout.module.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Map from "../../Components/Map/Map";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
