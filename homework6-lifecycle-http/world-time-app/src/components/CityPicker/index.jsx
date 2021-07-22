import { useState, useEffect } from 'react';

function CityPicker({ onSubmit }) {

    const [cities, setCities] = useState([]);

    useEffect(() => {
        fetch("data/cities.json")
            .then(response => response.json())
            .then(result => setCities([...result.sort((c1, c2) => c1.name.localeCompare(c2.name))]));
    }, []);

    const [selectedCity, setSelectedCity] = useState({time_zone: ""});

    const onChangeHandler = (event) => {
        let city = cities.find((city) => city.code === event.target.value);
        setSelectedCity(city ? city : {time_zone: ""});
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        onSubmit && selectedCity.time_zone && onSubmit(selectedCity);
    };

    return (        
        <form className="WorldTimeDashboard-Row" onSubmit={onFormSubmit}>
            <div className="WorldTimeDashboard-Field">
                <label>
                    City
                    <input type="text" list="cities" onChange={onChangeHandler} required></input>
                    <datalist id="cities">
                        {
                            cities.map((city) =>
                                <option key={city.code} value={city.code}>{`(${city.code}) ${city.name} - ${city.country_code}`}</option>
                            )
                        }
                    </datalist>
                </label>
            </div>
            <div className="WorldTimeDashboard-Field">
                <label>
                    Time zone
                    <input type="text" value={selectedCity.time_zone} readOnly />
                </label>
            </div>
            <div className="WorldTimeDashboard-Field">
                <input type="submit" value="Добавить" className="WorldTimeDashboard-Button" />
            </div>
        </form>
    );
}

export default CityPicker;