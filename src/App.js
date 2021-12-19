import LandingPage from './pages/LandingPage';
import NotFound from './pages/NotFound';
import Produk from './pages/Produk';
import TentangKami from './pages/TentangKami';
import MengapaKami from './pages/MengapaKami';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <LandingPage />}/>
          <Route exact path="/about_us" render={() => <TentangKami />}/>
          <Route exact path="/why_us" render={() => <MengapaKami />}/>
          <Route exact path="/produk" render={() => <Produk />}/>
          <Route exact path="*" render={() => <NotFound />}/>
        </Switch>
      </Router>
    );
}

export default App;
