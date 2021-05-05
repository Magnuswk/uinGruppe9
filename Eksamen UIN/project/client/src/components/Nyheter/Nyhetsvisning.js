import {useState} from 'react'
import { Link } from 'react-router-dom'
import {urlFor} from '../../utils/imageUrl'
// Prop er en JSON "nyhet" som inneholder hovednyheten, og en JSON andre som inneholder 9 andre nyheter
const Nyhetsvisning = ({andre, nyhet}) => {
    const[sorted, setSorted] = useState(1)
    const Sort = () => {
        // For å sjekke om listen allerede er sortert og sorterer i riktig rekkefølge
        if (sorted === 1){
            setSorted(2)
            //Elste først
            andre?.sort(function (a, b) {
                return a.dato.localeCompare(b.dato);
            });
        }else{
            // Nyeste først
            andre?.sort(function (a, b) {
                return b.dato.localeCompare(a.dato);
            });
            setSorted(1)
        }
    }
        return(
            <>
                {/* Displayer Content fra sanity */}
                <h1 id="nyhettittel">Østbønytt</h1>
                <button onClick={Sort} id="sort">Sorter Etter dato</button>
                <section id='nyhetsboks'>
                    {/* Lager Hovednyheten */}
                    <article id='hovednyhet'>
                        <img src={urlFor(nyhet.bilde.asset.url).format('webp').url()} alt={nyhet.beskrivelse}></img>
                        {/* Beholder datetime fra sanity for å kunne sortere etter dato og time, men displayer bare dato altså første 10 tegn */}
                        <h2>{nyhet.dato.slice(0,10)}</h2>
                        <h1>{nyhet.beskrivelse}</h1>
                    </article>
                    <article id="extranyhet">
                        <h1>Flere nyheter</h1>
                        {/* 9 Andre nyhetsaker  */}
                        {andre.map(function(name, index){
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
