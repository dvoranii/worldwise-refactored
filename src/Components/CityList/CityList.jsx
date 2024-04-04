import CityItem from "../CityItem/CityItem";
import styles from "../CityList/CityList.module.css";
import Spinner from "../Spinner/Spinner";
import Message from "../Message/Message";
import { useCities } from "../../Contexts/CitiesContext";

function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking one on the map!" />
    );

  return (
    <div>
      <ul className={styles.cityList}>
        {cities.map((city) => (
          <CityItem city={city} key={city.id} />
        ))}
      </ul>
    </div>
  );
}

export default CityList;
