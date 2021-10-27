import './App.css';
import {Route, Switch} from "react-router-dom";
import Homepage from "./components/Homepage";
import Header from "./components/Homepage";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path ="/homepage">
          <Homepage />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
