import { createContext, useEffect, useState, useContext } from "react";
import fetchData from "../utils/fetchData";

const BASE_URL = "http://localhost:8000";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});
  const [error, setError] = useState(null);

  function fetchCities() {
    fetchData(`${BASE_URL}/cities`, setCities, setIsLoading, setError);
  }

  useEffect(function () {
    fetchCities();
  }, []);

  async function getCity(id) {
    fetchData(
      `${BASE_URL}/cities/${id}`,
      setCurrentCity,
      setIsLoading,
      setError
    );
  }

  return (
    <CitiesContext.Provider
      value={{ cities, isLoading, currentCity, getCity, error }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (!context) {
    throw new Error("useCity must be used within a CitiesProvider");
  }
  return context;
}

export { CitiesProvider, useCities };
