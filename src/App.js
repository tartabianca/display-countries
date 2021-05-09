import './App.css';
import {Route, Switch} from "react-router-dom";
import Countries from "./features/pages/countries/Countries";
import Home from "./features/pages/home/Home";
import Map from "./features/pages/map/Map"
import Country from "./features/pages/country/Country";

function App() {
  return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/countries" component={Countries}></Route>
          <Route exact path="/map" component={Map}></Route>
          <Route exact path="/country/:name" component={Country}></Route>
        </Switch>

      </div>
  );
}

export default App;
