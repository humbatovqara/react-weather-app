import { createContext, useContext, useState } from "react";
import citiesJSON from "../data/cityOfAzerbaijan.json";

const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(citiesJSON[0]);

  const values = {
    city,
    setCity,
    citiesJSON,
    weather,
    setWeather,
  };

  return <CityContext.Provider value={values}>{children}</CityContext.Provider>;
};

// export default CityContext;

// Custom Context Hook
export const useCity = () => useContext(CityContext);
