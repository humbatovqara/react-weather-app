import { useContext } from 'react';
import CityContext from '../Context/CityContext';

function Header() {
    const { city, setCity, citiesJSON } = useContext(CityContext);

    const changeCity = (e) => {
        console.log(e.target.value);
        setCity(e.target.value);
    }

    return (
        <div className='dropdown'>
            <select
                name="cities"
                id="cities"
                value={city.name}
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