import {useState, useEffect} from 'react'
import Displaytestkategori from '../components/displaytestkategori';
import { sortfetch  } from '../utils/artikkelService';

const Testkategorisort = () => {
    // For kravet der vi skulle sortere innhold basert på en kategori
    const [artikel, setArtikel] = useState(null)
    const [ny, setNy] = useState(null)

    // henter alle artikler
    useEffect(()=> {
        const fetchAsyncSearch = async () =>{
            try {
                const resultat = await sortfetch()
                setArtikel(resultat)
                setNy(resultat)
              } catch (error) {
                  console.log(error)
              }
            };
            fetchAsyncSearch();
    }, []);

    // lager lister for alle kategorier
    const omoss = []
    const tjenester = []
    const sortering = []

    //Se igjennom JSON fil og del objekter inni lister
    for (let i = 0; i < artikel?.length; i++) {
        if (artikel[i].kategori === "Om Oss"){
            omoss.push(artikel[i])
        }else if (artikel[i].kategori === "Tjenester"){
            tjenester.push(artikel[i])
        }else{
            sortering.push(artikel[i])
        }
    }


    // Ved knappetrykk endre hvilken liste som skal sendes som prop
    const handleOmoss = () => {
        setNy(omoss)
    }
    const handleTjenester = () => {
        setNy(tjenester)
    }
    const handleSortering = () => {
        setNy(sortering)
    }
    const handleAlle = () => {
        setNy(artikel)
    }

    if (artikel?.length > 0 && ny?.length > 0){
        return (
            <section id="testartikkel">
                <button onClick={handleOmoss}>Om oss</button>
                <button onClick={handleTjenester}>Tjenester</button>
                <button onClick={handleSortering}>Sortering</button>
                <button onClick={handleAlle}>Alle</button>
                <Displaytestkategori name={ny} />
            </section>
        )
    }else{
        /* Status for fetch */
        return( <h1 id="loading">Loading...</h1>)
    }

}

export default Testkategorisort
