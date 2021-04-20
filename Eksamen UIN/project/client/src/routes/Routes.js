import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "../pages/Home"
import Artikler from "../pages/Artikler"
import React from 'react'
import Header from "../components/Header"
import Nyheter from "../pages/Nyheter"
import Footer from "../components/Footer"
import Testkategorisort from "../pages/Testkategorisort"



const Routes = () =>(
    
    <Router>
        <Header />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/Nyheter">
                <Nyheter />
            </Route>
            <Route exact path="/Testkategorisort">
                <Testkategorisort />
            </Route>
            <Route path="/:slug">
                <Artikler />
            </Route>
        </Switch>
        <Footer />
    </Router>
);
export default Routes;