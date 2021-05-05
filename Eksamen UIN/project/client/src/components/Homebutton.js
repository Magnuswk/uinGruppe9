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
                    <div key={name.tittel}>
                        <article >
                         {<Link to={name.link}><img src={urlFor(name.bilde.asset.url).format('webp').width('100').height('100').url()} alt={name.tittel}></img></Link>}

                         </article>
                         <Link to={name.link}><span className='caption'>{name.tittel}</span></Link>
                    </div>
                )
            })}
        </section>
    )
}

export default Homebutton


