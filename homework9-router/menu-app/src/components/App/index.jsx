import {BrowserRouter as Router} from 'react-router-dom';
import Menu from "../Menu";
import Content from '../Content';
import Pages from '../../pages';

function App() {
  return (
    <Router>
        <Menu pages={Pages} />
        <Content pages={Pages} />
    </Router>
  );
}

export default App;
