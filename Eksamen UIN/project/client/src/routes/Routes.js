import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "../pages/Home"
import Tjenester from "../pages/Tjenester"
import Sortering from "../pages/Sortering"
import Byggavfall from "../pages/Byggavfall"
import Containerleie from "../pages/Containerleie"

const Routes = () =>(
    <Router>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/Tjenester">
                <Tjenester />
            </Route>
            <Route exact path="/Sortering">
                <Sortering />
            </Route>
            <Route exact path="/Sortering/Byggavfall">
                <Byggavfall />
            </Route>
            <Route exact path="/Tjenester/Containerleie">
                <Containerleie />
            </Route>
        </Switch>
    </Router>
);
export default Routes;