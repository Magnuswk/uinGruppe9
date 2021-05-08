import React, {useEffect, useState, useRef } from 'react'
import Loading from '../components/Loading';
import { kursfetch, nyhetsfetch, searchfetch } from '../utils/artikkelService';
import { useLocation } from 'react-router'
import Mellomsidecontent from '../components/Mellomsidecontent';


const Kurs = () => {
    // Denne siden viser alle mellomsider
    const endreStyle = useRef()
    // Fjerne / fra linken
    let location  = useLocation().pathname.replace("/", "")
    const [data, setData] = useState(null)
    const [result, setResult] = useState([])
    //fetch for å hente innhold
    useEffect(()=> {
        const fetchAsyncKurs = async () =>{
            // Bruker linken til å vise hva som skal hentes
            try {
                if (location === "Kurs"){
                    const resultat = await kursfetch()
                    setData(resultat)
                    setResult(false)
                }else if(location === "Nyheter"){
                    const resultat = await nyhetsfetch()
                    setData(resultat)
                    setResult(false)
                }else{
                    const resultat = await searchfetch()
                    const find = []
                    // Søke strengen som ble sendt med Søke linken
                    const value = location.substring(7)
                    // Se igjennom alle objekter, filtrer igjennom nøkkel ord og se etter et nøkkelord som inkluderer søkestrenger, om funnet push til find eller gjør ingenting
                    resultat?.map(item => item.nokkelord.filter(x => x.includes(value.toLowerCase())).length > 0 ? find.push(item) : null);
                    setResult([...find])
                    setData(false)
                }

              } catch (error) {
                  console.log(error)
              }
            };
            fetchAsyncKurs();
    },[location]);



    // Om bruker vil vise siden som Grid
    const handleGrid = () =>{
        endreStyle.current.style.gridTemplateColumns = "22% 22% 22% 22%"
    }
    // Om bruker vil vise siden som en liste
    const handleListe = () =>{
        endreStyle.current.style.gridTemplateColumns = "22%"
    }

    // Vis Status til Bruker
    if (data === null || data === "ikke funnet" || result === null){
        return(
          <Loading data={data}/>
    )
    }else{
    return (
        <main id='mellomsidemain'>
            <section id="searchTop">
                    <button onClick={handleListe}>Vis Som Liste</button>
                    <button onClick={handleGrid}>Vis Som Grid</button>
                    {/* Om brukeren har søkt etter noke vis Søkeresultater ellers vis linken */}
                    <h1 id="nyhetoverskrift">{location.includes("Search")? "Søkeresultater": location}</h1>
            </section>
            <section id="nyhet" ref={endreStyle}>
                { result === false? <Mellomsidecontent data={data} location={location} />: <Mellomsidecontent data={result} location={location} />}
            </section>
        </main>
    )
    }

}

export default Kurs
