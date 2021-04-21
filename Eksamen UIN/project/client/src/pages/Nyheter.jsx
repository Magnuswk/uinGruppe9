import {useState, useEffect} from 'react'
import { nyhetsfetch} from "../utils/artikkelService";
import { Link } from 'react-router-dom'
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
        console.log(nyhet)
        return (
            <main>
                <h1 id="nyhetoverskrift">Nyheter</h1>
                <section id="nyhet">
                {nyhet.map(function(name, index){
                    console.log(name)
                    return <article> 
                            <h1>{name.tittel}</h1>
                            <img src={name.bilde.asset.url} alt={name.tittel}></img>
                            <h2>{name.beskrivelse}</h2>
                            <h3>{name.dato.slice(0,10)}</h3>
                            <Link to={name.slug}><button>Les mer</button></Link>
                            </article>;
                  })}
                </section>
            </main>
        )
    }else{
        return(<h1 id="loading">Loading...</h1>)
    }
    
}

export default Nyheter
