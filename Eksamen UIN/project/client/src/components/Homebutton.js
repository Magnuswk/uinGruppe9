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
import {urlFor} from '../utils/imageUrl'


const Homebutton = ({forside}) => {
    return (
        <section id="mainsection">
            {forside?.map(function(name, index){
                return(
                    <article key={name.tittel}>
                        {<Link to={name.link}><h2>{name.tittel}</h2><img src={urlFor(name.bilde.asset.url).format('webp').url()} alt={name.tittel}></img></Link>}
                    </article>
                )
            })}
        </section>
    )
}

export default Homebutton


