import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "../pages/Home"
import Artikler from "../pages/Artikler"
import React from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import Testkategorisort from "../pages/Testkategorisort"
import Kurs from "../pages/Mellomsider"



const Routes = () =>(

    <Router>
        <Header />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/Nyheter">
                <Kurs />
            </Route>
            <Route path="/Search/:slug">
                <Kurs />
            </Route>
           <Route exact path="/Search/">
                <Kurs />
            </Route>
            <Route exact path="/Testkategorisort">
                <Testkategorisort />
            </Route>
            <Route exact path="/Kurs">
                <Kurs />
            </Route>
            <Route path="/:slug">
                <Artikler />
            </Route>
        </Switch>
        <Footer />
    </Router>
);
export default Routes;