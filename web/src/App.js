
import './App.css';
import {BrowserRouter, Route,Router,Switch} from "react-router-dom";
import HomepageAdmin from './Components/Pages/HomepageAdmin';
import { createBrowserHistory } from 'history';
import AdminTemPlate from './Components/TemPlates/adminTemPlate';
import PublicTemPlate from './Components/TemPlates/publicTemPlate';
import HomePage from './Components/Pages/HomePage';
import Categories from './Components/Pages/Admin/Categories';
import DetailCategories from './Components/Pages/Admin/DetailCategories';
import themCategories from './Components/Pages/Admin/themCategories';
import mainProducts from './Components/Pages/Admin/Products/adminProducts';
import adminProducts from './Components/Pages/Admin/Products/adminProducts';
export const history = createBrowserHistory()
function App() {
  return (
    <Router history={history}>
      
      <Switch>
        {/* Sử dụng Template addmin */}
        <AdminTemPlate exact path = '/admin' Component={HomepageAdmin}/>
        <AdminTemPlate exact path = '/admin/categories/add' Component={themCategories}/>

        <AdminTemPlate exact path = '/admin/categories' Component={Categories}/>

        <AdminTemPlate exact path = '/admin/categories/:id' Component={DetailCategories}/>

        <AdminTemPlate exact path = '/admin/products' Component={adminProducts}/>





        {/* Sử dụng Template public */}
        <PublicTemPlate exact path = '/' Component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
