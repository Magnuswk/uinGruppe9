import React from 'react'
import { Link } from 'react-router-dom';
import {urlFor}from '../utils/imageUrl';

const Mellomsidecontent = ({data, location}) => {
    // Viser alle mellomsider, Søk, Kurs eller Nyheter
    return (
        <>
                {/* Går igjennom innhold i JSON og displayer nødvendig informasjon */}
                {data?.map(function(name, index){
                    return <article key={name.slug}>
                                <h1>{name.tittel}</h1>
                                <img src={urlFor(name.bilde.asset.url).width(900).height(600).format('webp').url()} alt={name.tittel}></img>
                                <p>{name.beskrivelse}</p>
                                {location === "Kurs" ?<h3>{name.startdato}</h3>: null}
                                {/* Vis forskjellig dato dersom det er nyhet */}
                                {location === "Nyheter" ? <h3>{name.dato}</h3> : null}
                                <Link to={name.slug}><button>Les mer</button></Link>
                            </article>;
                })}
        </>
    )
}

export default Mellomsidecontent
