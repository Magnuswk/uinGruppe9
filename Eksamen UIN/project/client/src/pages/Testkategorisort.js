import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { searchfetch } from '../utils/artikkelService';
 
const Testkategorisort = () => {
    const [artikkel, setArtikkel] = useState(null)
    useEffect(()=> {
        const fetchAsyncSearch = async () =>{
            try {
                const resultat = await searchfetch()
                setArtikkel (resultat)
              } catch (error) {
                  console.log(error)
              }  
            };
            fetchAsyncSearch();
    }, []);

    const Omoss = []
    const Tjenester = []
    const Sortering = []
    for (let i = 0; i < artikkel?.length; i++) {
        
    }


    const handleOmoss = () => {

    }
    const handleTjenester = () => {

    }
    const handleSortering = () => {

    }
    const handleAlle = () => {

    }

    if (artikkel?.length > 0){
        return (
            <section id="testartikkel">
                <form>
                    <button onClick={handleOmoss}>Om-oss</button>
                    <button onClick={handleTjenester}>Tjenester</button>
                    <button onClick={handleSortering}>Sortering</button>
                    <button onClick={handleAlle}>Alle</button>
                </form>
                <article>
                    {artikkel?.map(function(name, index){
                        return <Link to={name.slug} key={ index }>{name.tittel}<br /><br /></Link>;
                    })}
                </article> 
            </section>
        )
    }else{
        return( <h1 id="loading">Loading...</h1>)
    }
    
}

export default Testkategorisort
