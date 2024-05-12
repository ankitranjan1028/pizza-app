import "./App.css";
// eslint-disable-next-line no-unused-vars
import {Container, Navbar} from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopBar from "./components/TopBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
// eslint-disable-next-line no-unused-vars
import NavBar from "./components/NavBar";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import Login from "./screens/Login.jsx";
import Register from "./screens/Register.jsx";
import OrderScreen from "./screens/OrderScreen";
import AdminScreen from "./screens/AdminScreen";


function App() {
  console.log("process.env.REACT_APP_BACKEND_URL",process.env.REACT_APP_BACKEND_URL)
  return (
    <BrowserRouter>
      <TopBar/>
      <NavBar/>
      <Switch>
        <Route path="/register" component={Register} exact />
        <Route path="/admin" component={AdminScreen} />
        <Route path="/orders" component={OrderScreen} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/about" component={About} exact />
        <Route path="/cart" component={CartScreen} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/policy" component={Policy} exact />
        <Route path="/" component={HomeScreen} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
