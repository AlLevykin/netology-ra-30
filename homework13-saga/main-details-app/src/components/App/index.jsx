import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Services from '../Services';
import Details from '../Details';
import store from '../../store';

function App() {

  return (
    <Router>
      <Provider store={store}>
        <div className="container py-4">
          <div className="row">
            <div className="col">
              <Services />
            </div>
            <div className="col">
              <Route path="/services/:id" component={Details} />
            </div>
          </div>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
