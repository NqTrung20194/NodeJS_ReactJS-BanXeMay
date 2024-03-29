
import './App.css';
import {BrowserRouter, Route,Router,Switch} from "react-router-dom";
import HomepageAdmin from './Components/Pages/HomepageAdmin';
import { createBrowserHistory } from 'history';
import AdminTemPlate from './Components/TemPlates/adminTemPlate';
import PublicTemPlate from './Components/TemPlates/publicTemPlate';
import HomePage from './Components/Pages/HomePage';
import Categories from './Components/Pages/Admin/Categories';
import DetailCategories from './Components/Pages/Admin/DetailCategories';
import ThemCategories from './Components/Pages/Admin/themCategories';
import AdminProducts from './Components/Pages/Admin/Products/adminProducts';
import AdminAddProduct from './Components/Pages/Admin/Products/adminAddProduct';
export const history = createBrowserHistory()
function App() {
  return (
    <Router history={history}>
      
      <Switch>
        {/* Sử dụng Template addmin */}
        <AdminTemPlate exact path = '/admin' Component={HomepageAdmin}/>
        <AdminTemPlate exact path = '/admin/categories/add' Component={ThemCategories}/>

        <AdminTemPlate exact path = '/admin/categories' Component={Categories}/>

        <AdminTemPlate exact path = '/admin/categories/:id' Component={DetailCategories}/>

        <AdminTemPlate exact path = '/admin/products' Component={AdminProducts}/>
        <AdminTemPlate exact path = '/admin/products/add' Component={AdminAddProduct}/>





        {/* Sử dụng Template public */}
        <PublicTemPlate exact path = '/' Component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
