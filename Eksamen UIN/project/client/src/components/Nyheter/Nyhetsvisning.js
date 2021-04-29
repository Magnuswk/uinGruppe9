import {useState} from 'react'
import { Link } from 'react-router-dom'
import {urlFor} from '../../utils/imageUrl'

const Nyhetsvisning = (props) => {
    const[sorted, setSorted] = useState(1)
    console.log(props.andre)
    const Sort = () => {
        if (sorted === 1){
            setSorted(2)
            props.andre?.sort(function (a, b) {
                return a.dato.localeCompare(b.dato);
            });
        }else{
            props.andre?.sort(function (a, b) {
                return b.dato.localeCompare(a.dato);
            });
            setSorted(1)
        }   
    }
        return(
            <>
                <h1 id="nyhettittel">Østbønytt</h1>
                <button onClick={Sort} id="sort">Sorter Etter dato</button>
                <section id='nyhetsboks'>
                    <article id='hovednyhet'>
                        <img src={urlFor(props.nyhet.bilde.asset.url).format('webp').url()} alt={props.nyhet.beskrivelse}></img>
                        <h2>{props.nyhet.dato.slice(0,10)}</h2>
                        <h1>{props.nyhet.beskrivelse}</h1>
                    </article>
                    <article id="extranyhet">
                        <h1>Flere nyheter</h1>
                        {props.andre.map(function(name, index){
                            return(
                                <article className="eldrenyheter" key={name.slug}>
                                     <img src={urlFor(name.bilde.asset.url).format('webp').url()} alt={name.beskrivelse}></img>
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
