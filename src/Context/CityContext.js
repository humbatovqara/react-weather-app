import { createContext, useState } from "react";
import citiesJSON from '../data/cityOfAzerbaijan.json';

const CityContext = createContext();

export const CityProvider = ({ children }) => {
    const [weather, setweather] = useState([]);
    const [city, setCity] = useState(citiesJSON);
    
    const values = {
        city, 
        setCity,
        citiesJSON,
        weather,
        setweather
    }

    return <CityContext.Provider value={values}>
        {children}
    </CityContext.Provider>
}

export default CityContext;