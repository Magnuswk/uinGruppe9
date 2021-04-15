import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "../pages/Home"
import Containerleie from "../pages/Artikler"
import React from 'react'
import Header from "../components/Header"
import Nyheter from "../pages/Nyheter"
import Footer from "../components/Footer"



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
            <Route path="/:slug">
                <Containerleie />
            </Route>
        </Switch>
        <Footer />
    </Router>
);
export default Routes;