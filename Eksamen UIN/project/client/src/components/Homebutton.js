import React from 'react'
/* import Container from "../Images/Container.png"
import Bilvraking from "../Images/Bilvraking.png"
import Avfallstømming from "../Images/Avfallstømming.png"
import Farlig from "../Images/Farlig.png"
import Nyheter from "../Images/Nyheter.png"
import Om_oss from "../Images/Om_oss.png"
import Tjenester from "../Images/Tjenester.png"
import Åpningstider from "../Images/Åpningstider.png" */
import { Link } from 'react-router-dom' 


const Homebutton = ({forside}) => {
    return (
        <section id="mainsection">
            {forside?.map(function(name, index){
                return(
                    <article key={name.link}>
                        {<Link to={name.link}><h2>{name.tittel}</h2><img src={name.bilde.asset.url} alt={name.tittel}></img></Link>}
                    </article>
                )
            })}
        </section>
    )
}

export default Homebutton


