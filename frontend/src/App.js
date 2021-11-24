import './App.css'
import {Route, Switch} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppOverview from "./pages/AppOverview";
import DetailsPage from "./pages/DetailsPage";
import AddApp from "./pages/AddApp";
import EditApp from "./pages/EditApp";
import PrivateRoute from "./routing/PrivateRoute";
import Login from "./pages/Login";
import Auth from "./pages/Auth";



function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/auth">
                    <Auth />
                </Route>
                <PrivateRoute exact path="/overview">
                    <AppOverview />
                </PrivateRoute>
                <PrivateRoute exact path="/details/:id">
                    <DetailsPage />
                </PrivateRoute>
                <PrivateRoute exact path="/add-app">
                    <AddApp />
                </PrivateRoute>
                <PrivateRoute exact path="/edit/:id">
                    <EditApp />
                </PrivateRoute>
            </Switch>
            <Footer/>
        </div>
    )
}

export default App;
