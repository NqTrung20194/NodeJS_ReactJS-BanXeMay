
import './App.css';
import {BrowserRouter, Route,Router,Switch} from "react-router-dom";
import HomepageAdmin from './Components/Pages/HomepageAdmin';
import { createBrowserHistory } from 'history';
import AdminTemPlate from './Components/TemPlates/adminTemPlate';
import PublicTemPlate from './Components/TemPlates/publicTemPlate';
import HomePage from './Components/Pages/HomePage';
import Categories from './Components/Pages/Admin/Categories';
export const history = createBrowserHistory()
function App() {
  return (
    <Router history={history}>
      
      <Switch>
        {/* Sử dụng Template addmin */}
        <AdminTemPlate exact path = '/admin' Component={HomepageAdmin}/>
        <AdminTemPlate exact path = '/admin/categories' Component={Categories}/>

        {/* Sử dụng Template public */}
        <PublicTemPlate exact path = '/' Component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
