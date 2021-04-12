import React from 'react'
import Container from "../Images/Container.png"
import Bilvraking from "../Images/Bilvraking.png"
import Avfallstømming from "../Images/Avfallstømming.png"
import Farlig from "../Images/Farlig.png"
import Nyheter from "../Images/Nyheter.png"
import Om_oss from "../Images/Om_oss.png"
import Tjenester from "../Images/Tjenester.png"
import Åpningstider from "../Images/Åpningstider.png"
import { NavLink } from 'react-router-dom'


const Homebutton = () => {
    return (
        <section id="mainsection">
            <article><NavLink to="/Containerleie">Containerleie<img src={Container} alt="Containerleie"></img></NavLink></article>
            <article><NavLink to="/Åpningstider">Åpningstider <img src={Åpningstider} alt="Containerleie"></img></NavLink></article>
            <article><NavLink to="/Bilvraking">Bilvraking<img src={Bilvraking} alt="Containerleie"></img></NavLink></article>
            <article><NavLink to="/Tjenester">Tjenester<img src={Tjenester} alt="Containerleie"></img></NavLink></article>
            <article><NavLink to="/Avfallstømming">Avfallstømming<img src={Avfallstømming} alt="Containerleie"></img></NavLink></article>
            <article><NavLink to="/Om-Oss">Om oss<img src={Om_oss} alt="Containerleie"></img></NavLink></article>
            <article><NavLink to="/Nyheter">Nyheter<img src={Nyheter} alt="Containerleie"></img></NavLink></article>
            <article><NavLink to="/Farlingavfall">Farlig Avfall<img src={Farlig} alt="Containerleie"></img></NavLink></article>
        </section>
    )
}

export default Homebutton
