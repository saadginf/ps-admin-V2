import "./App.css";
import Sidebar from "./Layout/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Devis from "./pages/Devis";
import Services from "./pages/Services";
import CategoryServices from "./pages/CategoryServices";
import Products from "./pages/Product";
import TypeProduct from "./pages/TypeProduct";
import CatProduct from "./pages/CatProduct";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/users" exact component={Users} />
          <Route path="/devis" exact component={Devis} />
          <Route path="/services" exact component={Services} />
          <Route path="/servicescategorie" exact component={CategoryServices} />
          <Route path="/products" exact component={Products} />
          <Route path="/productstype" exact component={TypeProduct} />
          <Route path="/productscategorie" exact component={CatProduct} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
