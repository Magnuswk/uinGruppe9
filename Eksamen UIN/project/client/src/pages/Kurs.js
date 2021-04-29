import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import { kursfetch } from '../utils/artikkelService';
import {urlFor} from '../utils/imageUrl';
const Kurs = () => {
    const [kurs, setKurs] = useState(null)
    useEffect(()=> {
        const fetchAsyncKurs = async () =>{
            try {
                const resultat = await kursfetch()
                setKurs(resultat)
              } catch (error) {
                  console.log(error)
              }
            };
            fetchAsyncKurs();
    },[]);

    if (kurs?.length > 0){
    return (
        <main>
        <h1 id="kursoverskrift">Kurs</h1>
        <section id="kurs">
        {kurs.map(function(name, index){
            return <article key={name.slug}>
                        <h1>{name.tittel}</h1>
                        <img src={urlFor(name.bilde.asset.url).format('webp').url()} alt={name.tittel}></img>
                        <h2>{name.beskrivelse}</h2>
                        <h3>{name.startdato.slice(0,10)}</h3>
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

export default Kurs
