import React from 'react'
import { Link } from 'react-router-dom';

const Mellomsidecontent = ({data, location}) => {
    return (
        <>
                {data.map(function(name, index){
                    return <article key={name.slug}>
                                <h1>{name.tittel}</h1>
                                <img src={name.bilde.asset.url} alt={name.tittel}></img>
                                <h2>{name.beskrivelse}</h2>
                                {location === "Kurs" ?<h3>{name.startdato}</h3>: null}
                                {location === "Nyheter" ? <h3>{name.dato.slice(0,10)}</h3> : null}
                                <Link to={name.slug}><button>Les mer</button></Link>
                            </article>;
                })}
        </>
    )
}

export default Mellomsidecontent
