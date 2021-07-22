import { useState } from 'react';
import CityPicker from '../CityPicker';
import Clock from '../Clock';
import './App.css';

function App() {

  const [cities, setClocks] = useState({});

  const onCityAdd = (city) => {
    setClocks(prev => ({
      ...prev,
      [city.code]: {...city}
    }));
  }

  const onClockRemove = (code) => {
    setClocks(prev => {
      let next = { ...prev };
      delete next[code]
      return next;
    });
  }  

  return (
    <div className="WorldTimeDashboard">
      <header className="WorldTimeDashboard-Header">
        <CityPicker onSubmit={onCityAdd} />
      </header>
      <main className="WorldTimeDashboard-Main">
        {
          Object.keys(cities).map((code) => <Clock key={code} city={cities[code]} onClick={() => onClockRemove(code)} />)
        }
      </main>
    </div>
  );
}

export default App;
