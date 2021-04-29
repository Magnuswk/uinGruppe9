import React from 'react'
import { Link } from 'react-router-dom'
import {urlFor} from '../../utils/imageUrl'

const Sistenytt = ({ nyheter }) => {
    return (
        <section id="sistenytt">
            <h1 id="sistenyttoverskrift">Siste Nytt!</h1>
            {nyheter?.map(function(name, index){
                    return <article className="sistenyttarticle" key={name.slug}>
                            <h1>{name.tittel}</h1>
                            <img src={urlFor(name.bilde.asset.url).format('webp').url()} alt={name.tittel}></img>
                            <Link to={name.slug}><button>Les mer!</button></Link>
                        </article>;
                  })}
        </section>
    )
}

export default Sistenytt
