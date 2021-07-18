import Clock from '../Clock';
import './App.css';

function App() {
  return (
    <>
      <Clock timeZone="Asia/Yekaterinburg" />
      <Clock timeZone="America/Thule" />
      <Clock timeZone="Europe/London" />
    </>
  );
}

export default App;
