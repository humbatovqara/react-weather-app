import axios from "axios";
import { useEffect, useContext } from "react";
// import CityContext from "../Context/CityContext";
import { useCity } from "../Context/CityContext";

function Cards() {
  // const { weather, setWeather, city } = useContext(CityContext);
  const { weather, setWeather, city } = useCity();

  useEffect(() => {
    const API_KEY = "9d20686f2aa0628a6dacebdfc19c088a";

    const getData = async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city?.name}&appid=${API_KEY}&units=metric&lang=az`
        );

        const data = res.data;

        setWeather(data);
      } catch (error) {
        console.error("Error", error);
      }
    };

    getData();
  }, [city]);

  return (
    <div className="cards">
      <div className="cityCard">
        <h4>
          <b>{city?.name}</b>
        </h4>
        {weather ? (
          <>
            <p>{weather.weather[0]?.description}</p>
            <p>{weather.main?.temp}°C</p>
            <p>Humidity: {weather.main?.humidity}%</p>
            <p>Speed: {weather.wind?.speed} m/s</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Cards;
