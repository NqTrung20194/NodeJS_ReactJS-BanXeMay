
import './App.css';
import {BrowserRouter, Route,Router,Switch} from "react-router-dom"
import HeaderAdmin from './Components/Header/headerAdmin';
import HomepageAdmin from './Components/Pages/HomepageAdmin';
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory()
function App() {
  return (
    <Router history={history}>
      <HeaderAdmin/>
      <Switch>
        <Route exact path = '/' component={HomepageAdmin}/>
      </Switch>
    </Router>
  );
}

export default App;
