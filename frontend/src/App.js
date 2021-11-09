import './App.css'
import {Route, Switch} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppOverview from "./pages/AppOverview";
import DetailsPage from "./pages/DetailsPage";
import AddApp from "./pages/AddApp";


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
                <Route exact path="/details/:id">
                    <DetailsPage />
                </Route>
                <Route exact path="/add-app">
                    <AddApp />
                </Route>
            </Switch>
            <Footer/>
        </div>
    )
}

export default App;
