import axios from 'axios';
import { useEffect, useContext } from 'react';
import CityContext from '../Context/CityContext';

function Cards() {
    const { weather, setWeather, city } = useContext(CityContext);

    useEffect(() => {
        const API_KEY = '9d20686f2aa0628a6dacebdfc19c088a';
        const getData = async () => {
            const res = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=az`)
            console.log((await res).data)
            setWeather((await res).data);
        };
        getData();
    }, [city, setWeather])

    return (
        <div className='cards'>
            <div className="cityCard">
                <h4><b>John Doe</b></h4>
                <p>Architect - Engineer</p>
            </div>
        </div>
    )
}

export default Cards