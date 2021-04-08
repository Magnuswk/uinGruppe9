import React from 'react'
import Container from "../Images/Container.png"
import Bilvraking from "../Images/Bilvraking.png"
import Avfallstømming from "../Images/Avfallstømming.png"
import Farlig from "../Images/Farlig.png"
import Nyheter from "../Images/Nyheter.png"
import Om_oss from "../Images/Om_oss.png"
import Tjenester from "../Images/Tjenester.png"
import Åpningstider from "../Images/Åpningstider.png"


const Homebutton = () => {
    return (
        <section id="mainsection">
            <article>Containerleie<img src={Container} alt="Containerleie"></img></article>
            <article>Åpningstider <img src={Åpningstider} alt="Containerleie"></img></article>
            <article>Bilvraking<img src={Bilvraking} alt="Containerleie"></img></article>
            <article>Tjenester<img src={Tjenester} alt="Containerleie"></img></article>
            <article>Avfallstømming<img src={Avfallstømming} alt="Containerleie"></img></article>
            <article>Om oss<img src={Om_oss} alt="Containerleie"></img></article>
            <article>Nyheter<img src={Nyheter} alt="Containerleie"></img></article>
            <article>Farlig Avfall<img src={Farlig} alt="Containerleie"></img></article>
        </section>
    )
}

export default Homebutton
