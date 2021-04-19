import React from 'react'
import { Link } from 'react-router-dom'

const Nyhetsvisning = (props) => {
        return(
            <>
                <h1 id="nyhettittel">Østbønytt</h1>
                <section id='nyhetsboks'>
                    <article id='hovednyhet'>
                        <img src={props.nyhet[0].bilde.asset.url} alt={props.nyhet[0].beskrivelse}></img>
                        <h2>{props.nyhet[0].dato}</h2>
                        <h1>{props.nyhet[0].beskrivelse}</h1>
                    </article>
                    <article id="extranyhet">
                        <h1>Flere nyheter</h1>
                        {props.andre.map(function(name, index){
                            return(
                                <article className="eldrenyheter">
                                     <img src={name.bilde.asset.url} alt={name.beskrivelse}></img>
                                    <h2>{name.beskrivelse}</h2>
                                </article>
                            );
                        })}
                    </article>
                </section>
                <button id="lesmer"><Link to="/Nyheter">Les Flere nyheter her!</Link></button>
            </>
        )
}

export default Nyhetsvisning
