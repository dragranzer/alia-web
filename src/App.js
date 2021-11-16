import LandingPage from './pages/LandingPage';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <LandingPage />}/>
          <Route exact path="*" render={() => <NotFound />}/>
        </Switch>
      </Router>
    );
}

export default App;
