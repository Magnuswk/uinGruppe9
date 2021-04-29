import {useState, useEffect} from 'react'
import { nyhetsfetch} from "../utils/artikkelService";
import { Link } from 'react-router-dom'
import {urlFor} from '../utils/imageUrl'
const Nyheter = () => {
    const [nyhet, setNyhet] = useState(null)
    useEffect(()=> {
        const fetchAsyncSearch = async () =>{
            try {
                const resultat = await nyhetsfetch()
                setNyhet(resultat)
              } catch (error) {
                  console.log(error)
              }  
            };
            fetchAsyncSearch();
    }, []);

    if (nyhet?.length > 0){
        return (
            <main>
                <h1 id="nyhetoverskrift">Nyheter</h1>
                <section id="nyhet">
                {nyhet.map(function(name, index){
                    return <article> 
                            <h1>{name.tittel}</h1>
                            <img src={urlFor(name.bilde.asset.url).format('webp').url()} alt={name.tittel}></img>
                            <h2>{name.beskrivelse}</h2>
                            <h3>{name.dato.slice(0,10)}</h3>
                            <Link to={name.slug}><button>Les mer</button></Link>
                            </article>;
                  })}
                </section>
            </main>
        )
    }else{
        return(<Loading status='loading' />)
    }
    
}

export default Nyheter
