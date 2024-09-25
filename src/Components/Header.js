// import { useContext } from 'react';
// import CityContext from '../Context/CityContext';
import { useCity } from "../Context/CityContext";

function Header() {
    // const { city, setCity, citiesJSON } = useContext(CityContext);
    const {city, setCity, citiesJSON} = useCity();

    const changeCity = (e) => {
        const selectedCity = citiesJSON.find((item) => item.name === e.target.value);
        setCity(selectedCity);
    }

    return (
        <div className='dropdown'>
            <select
                name="cities"
                id="cities"
                value={city?.name}
                onChange={changeCity}
            >
                {citiesJSON.map((item, i) => {
                    return (
                        <option value={item.name} key={i}>
                            {item.name}
                        </option>
                    );
                })}
            </select>
        </div>
    )
}

export default Header