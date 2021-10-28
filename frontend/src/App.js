import './App.css'
import {Route, Switch} from "react-router-dom";
import Homepage from "./components/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppOverview from "./components/AppOverview";

function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>
                <Route exact path="/overview">
                    <AppOverview />
                </Route>
            </Switch>
            <Footer/>
        </div>
    )
}

export default App;
